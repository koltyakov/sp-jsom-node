import * as Mocha from 'mocha';
import { expect } from 'chai';
import { IAuthContext } from 'node-sp-auth-config';

import { JsomNode } from '../../src';
import { getAuthCtx, getAuth } from '../misc';
import { Environments } from '../configs';

describe(`sp-jsom-node search tests`, () => {

  for (const envConf of Environments) {

    describe(`run tests in ${envConf.environmentName}`, () => {

      let config: IAuthContext;
      let jsom: JsomNode;

      before('preauthenticate for fair timings', function(done: Mocha.Done): void {
        this.timeout(30 * 1000);
        getAuth(Environments[0]).then(() => done()).catch(done);
      });

      before('configure JsomNode', function (done: Mocha.Done): void {
        this.timeout(30 * 1000);

        getAuthCtx(envConf)
          .then((ctx) => {
            config = ctx;
            jsom = new JsomNode({ modules: [ 'search' ] }).init(config);
            done();
          })
          .catch(done);
      });

      it(`should get data using search`, function (done: Mocha.Done): void {
        this.timeout(30 * 1000);

        const ctx = jsom.getContext();
        const keywordQuery = new Microsoft.SharePoint.Client.Search.Query.KeywordQuery(ctx);
        keywordQuery.set_trimDuplicates(false);
        keywordQuery.set_rowLimit(5);
        keywordQuery.set_queryText('*');
        const searchExecutor = new Microsoft.SharePoint.Client.Search.Query.SearchExecutor(ctx);
        const results = searchExecutor.executeQuery(keywordQuery);
        ctx.executeQueryPromise().then(() => done()).catch(done);
      });

    });

  }

});
