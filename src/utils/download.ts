import * as fs from 'fs';
import * as path from 'path';
import * as mkdirp from 'mkdirp';
import * as spRequest from 'sp-request';
// tslint:disable-next-line:no-duplicate-imports
import { ISPRequest } from 'sp-request';
import * as colors from 'colors';
import { Cpass } from 'cpass';

import { JsomModules, lcid } from '../config';
import { IEnvironmentConfig } from '../interfaces';

const cpass = new Cpass();

export const downloadJsomScripts = async (envCfgs: IEnvironmentConfig[]): Promise<void> => {
  for (let envCfg of envCfgs) {
    console.log(`\n== ${colors.yellow.bold(`Downloading assets from ${envCfg.environmentName}`)} ==\n`);
    const confOptions: any = require(path.resolve(envCfg.configPath));
    let spr: ISPRequest = spRequest.create({
      ...confOptions,
      password: confOptions.password && cpass.decode(confOptions.password)
    });
    for (let moduleName of Object.keys(JsomModules)) {
      let JsomScripts = JsomModules[moduleName];
      for (let script of JsomScripts) {

        let scriptPath = script.replace('{{lcid}}', lcid);
        let scriptUrl = `${confOptions.siteUrl}/_layouts/15/${scriptPath}`;
        await spr.get(scriptUrl, {
          headers: {
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
          },
          json: false
        })
          .then((response: any) => {
            if (response.statusCode === 200) {
              let localFilePath = path.join(process.cwd(), 'jsom', envCfg.envCode || '', scriptUrl.split('/_layouts/15/')[1]);
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
