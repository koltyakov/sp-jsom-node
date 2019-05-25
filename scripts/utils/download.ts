import * as fs from 'fs';
import * as path from 'path';
import * as mkdirp from 'mkdirp';
import * as spRequest from 'sp-request';
import * as colors from 'colors';

import { JsomModules, lcid } from '../../src/config';
import { IEnvironmentConfig } from '../../test/IEnv';
import { getAuthCtx } from '../../test/misc';

export const downloadJsomScripts = async (envCfgs: IEnvironmentConfig[]): Promise<void> => {
  for (const envCfg of envCfgs) {
    console.log(`\n== ${colors.yellow.bold(`Downloading assets from ${envCfg.environmentName}`)} ==\n`);

    const { siteUrl, authOptions } = await getAuthCtx(envCfg);
    const spr: spRequest.ISPRequest = spRequest.create(authOptions);
    for (const moduleName of Object.keys(JsomModules)) {
      const JsomScripts = JsomModules[moduleName];
      for (const script of JsomScripts) {

        const scriptPath = script.replace('{{lcid}}', lcid);
        const scriptUrl = `${siteUrl}/_layouts/15/${scriptPath}`;
        await Promise.resolve(spr.get(scriptUrl, {
          headers: {
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
          },
          json: false
        }))
          .then((response: any) => {
            if (response.statusCode === 200) {
              const localFilePath = path.join(process.cwd(), 'jsom', envCfg.envCode || '', scriptUrl.split('/_layouts/15/')[1]);
              mkdirp.sync(path.dirname(localFilePath));
              fs.writeFileSync(localFilePath, response.body);
              console.log(` ${colors.gray(`${scriptPath}`)} (${colors.green(`done`)})`);
              return;
            }
          })
          .catch((err: any) => {
            console.log(` ${colors.gray.bold(`${scriptPath}`)} (error: ${colors.red(`${err.message}`)})`);
          });

      }
    }
  }
  console.log('');
};
