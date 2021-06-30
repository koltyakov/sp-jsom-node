import * as Mocha from 'mocha';
import { expect } from 'chai';
import * as sprequest from 'sp-request';
import { IAuthContext } from 'node-sp-auth-config';

import { JsomNode } from '../src';
import { getAuthCtx, getAuth } from './misc';
import { Environments } from './configs';

const testVariables = {
  newListName: 'JsomNode Temporary List'
};

declare const global: any;

describe(`sp-jsom-node core tests`, () => {

  for (const envConf of Environments) {

    describe(`run tests in ${envConf.environmentName}`, () => {

      let request: sprequest.ISPRequest;
      let config: IAuthContext;
      let _spPageContextInfo: any;
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
            jsom = new JsomNode().init(config);
            request = sprequest.create(config.authOptions);
            _spPageContextInfo = global.window._spPageContextInfo;
            done();
          })
          .catch(done);
      });

      it(`should get context from JsomNode`, function (done: Mocha.Done): void {
        this.timeout(30 * 1000);

        const ctx = jsom.getContext();
        const oWeb = ctx.get_web();
        ctx.load(oWeb);
        ctx.executeQueryPromise().then(() => done()).catch(done);
      });

      it(`should get web's title`, function (done: Mocha.Done): void {
        this.timeout(30 * 1000);

        const getWeb = (): Promise<any> => {
          // const ctx = SP.ClientContext.get_current();
          const ctx = new SP.ClientContext(_spPageContextInfo.webServerRelativeUrl);
          const oWeb = ctx.get_web();
          ctx.load(oWeb);
          return ctx.executeQueryPromise().then(() => oWeb.get_title());
        };

        request.get(`${config.siteUrl}/_api/web?$select=Title`)
          .then((response) => {
            return Promise.all([
              getWeb(),
              response.body.d.Title
            ]);
          })
          .then((response) => {
            expect(response[0]).to.equal(response[1]);
            done();
          })
          .catch(done);
      });

      it(`should get lists on web`, function (done: Mocha.Done): void {
        this.timeout(30 * 1000);

        const getLists = (): Promise<any> => {
          // const ctx = SP.ClientContext.get_current();
          const ctx = new SP.ClientContext(_spPageContextInfo.webServerRelativeUrl);
          const oWeb = ctx.get_web();
          const oLists = oWeb.get_lists();
          ctx.load(oLists);
          return ctx.executeQueryPromise().then(() => oLists.get_data());
        };

        request.get(`${config.siteUrl}/_api/web/lists?$select=Title`)
          .then((response) => {
            return Promise.all([
              getLists(),
              response.body.d.results
            ]);
          })
          .then((response) => {
            expect(response[0].length).to.equal(response[1].length);
            done();
          })
          .catch(done);
      });

      it('should create a new list', function (done: Mocha.Done): void {
        this.timeout(30 * 1000);

        const createList = (title: string, description: string = '', listTemplateId: number = 100): Promise<any> => {
          // const ctx = SP.ClientContext.get_current();
          const ctx = new SP.ClientContext(_spPageContextInfo.webServerRelativeUrl);
          const oWeb = ctx.get_web();
          const oLists = oWeb.get_lists();
          const listCreationInfo = new SP.ListCreationInformation();
          listCreationInfo.set_title(title);
          listCreationInfo.set_description(description);
          listCreationInfo.set_templateType(listTemplateId);
          const oList = oLists.add(listCreationInfo);
          ctx.load(oList);
          return ctx.executeQueryPromise().then(() => oList);
        };

        const getListByTitle = (title: string): Promise<any> => {
          // const ctx = SP.ClientContext.get_current();
          const ctx = new SP.ClientContext(_spPageContextInfo.webServerRelativeUrl);
          const oWeb = ctx.get_web();
          const oLists = oWeb.get_lists();
          const oList = oLists.getByTitle(title);
          ctx.load(oList);
          return ctx.executeQueryPromise().then(() => oList.get_title());
        };

        createList(testVariables.newListName, 'Test List created with JsomNode', SP.ListTemplateType.genericList)
          .then((response) => {
            return getListByTitle(testVariables.newListName);
          })
          .then((response) => {
            expect(response).to.equal(testVariables.newListName);
            done();
          })
          .catch(done);
      });

      it('should create list item', function (done: Mocha.Done): void {
        this.timeout(30 * 1000);

        const createListItem = (listTitle: string, metadata: any): Promise<any> => {
          // const ctx = SP.ClientContext.get_current();
          const ctx = new SP.ClientContext(_spPageContextInfo.webServerRelativeUrl);
          const oWeb = ctx.get_web();
          const oLists = oWeb.get_lists();
          const oList = oLists.getByTitle(listTitle);

          const itemCreationInfo = new SP.ListItemCreationInformation();
          const oListItem = oList.addItem(itemCreationInfo);

          for (const field of Object.keys(metadata)) {
            oListItem.set_item(field, metadata[field]);
          }
          oListItem.update();

          ctx.load(oListItem);
          return ctx.executeQueryPromise().then(() => oListItem);
        };

        const getListItemsCount = (listTitle: string): Promise<any> => {
          // const ctx = SP.ClientContext.get_current();
          const ctx = new SP.ClientContext(_spPageContextInfo.webServerRelativeUrl);
          const oWeb = ctx.get_web();
          const oLists = oWeb.get_lists();
          const oList = oLists.getByTitle(listTitle);
          ctx.load(oList);
          return ctx.executeQueryPromise().then(() => oList.get_itemCount());
        };

        createListItem(testVariables.newListName, { Title: 'New item' })
          .then((response) => {
            return getListItemsCount(testVariables.newListName);
          })
          .then((response) => {
            expect(response).to.equal(1);
            done();
          })
          .catch(done);
      });

      it('should delete list item', function (done: Mocha.Done): void {
        this.timeout(30 * 1000);

        const deleteItemById = (listTitle: string, itemId: number): Promise<any> => {
          return new Promise((resolve, reject) => {
            // const ctx = SP.ClientContext.get_current();
            const ctx = new SP.ClientContext(_spPageContextInfo.webServerRelativeUrl);
            const oWeb = ctx.get_web();
            const oLists = oWeb.get_lists();
            const oList = oLists.getByTitle(listTitle);
            const oItem = oList.getItemById(itemId);

            oItem.deleteObject();
            ctx.executeQueryAsync(() => {
              resolve(oItem);
            }, (sender, args) => {
              reject(args.get_message());
            });
          });
        };

        const deleteItemWithGreatesId = (listTitle: string): Promise<any> => {
          // const ctx = SP.ClientContext.get_current();
          const ctx = new SP.ClientContext(_spPageContextInfo.webServerRelativeUrl);
          const oWeb = ctx.get_web();
          const oLists = oWeb.get_lists();
          const oList = oLists.getByTitle(listTitle);

          const camlQuery = new SP.CamlQuery();
          camlQuery.set_viewXml(`
            <View>
              <Query>
                <OrderBy>
                  <FieldRef Name='Created' Ascending='True'></FieldRef>
                </OrderBy>
              </Query>
              <ViewFields>
                <FieldRef Name='ID'/>
                <FieldRef Name='Title'/>
              </ViewFields>
            </View>
          `);
          const oItems = oList.getItems(camlQuery);

          ctx.load(oItems);
          return ctx.executeQueryPromise().then(() => {
            const itemsData = oItems.get_data();
            if (itemsData.length === 0) {
              return 'No items found in a list';
            }
            return deleteItemById(listTitle, itemsData[0].get_fieldValues().ID);
          });
        };

        deleteItemWithGreatesId(testVariables.newListName)
          .then((response) => done())
          .catch(done);
      });

      /**
       * TBD:
       *  - Taxonomy
       *  - User profiles
       *  ...
       *
       */

      after('deleting test objects', function (done: Mocha.Done): void {
        this.timeout(30 * 1000);

        let digest: string;
        request.requestDigest(config.siteUrl)
          .then((response) => {
            digest = response;
            return request.get(`${config.siteUrl}/_api/web/lists/getByTitle('${testVariables.newListName}')`)
              .then((res) => {
                return 'can delete';
              })
              .catch((ex) => {
                if (ex.statusCode === 404) {
                  return ''; // Do not try to delete if wasn't created
                }
                throw ex;
              });
          })
          .then((response): any => {
            if (response === 'can delete') {
              // Delete created test list
              return request.post(`${config.siteUrl}/_api/web/lists/getByTitle('${testVariables.newListName}')`, {
                headers: {
                  'X-RequestDigest': digest,
                  'X-HTTP-Method': 'DELETE',
                  'IF-MATCH': '*'
                }
              });
            } else {
              return '';
            }
          })
          .then(() => done())
          .catch(done);

      });

    });

  }

  // Need multiple environments to test this case
  if (Environments.length > 1) {
    it(`should support multiple contexts`, function (done: Mocha.Done): void {
      this.timeout(30 * 1000);
      Promise
        .all(Environments.map((envConf) => getAuthCtx(envConf)))
        .then((ctxs) => {
          return Promise.all(ctxs.map((conf) => {
            const ctx = new JsomNode().init(conf).getContext();
            const oWeb = ctx.get_web();
            ctx.load(oWeb);
            return ctx.executeQueryPromise();
          }));
        })
        .then(() => done())
        .catch(done);
    });
  }

});
