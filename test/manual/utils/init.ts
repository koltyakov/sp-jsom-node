import * as merge from 'lodash.merge';
import { JsomNode, IConfigSettings } from './../../../src/index';

export const setting: IConfigSettings = {
  configPath: './config/private.json',
  encryptPassword: true,
  saveConfigOnDisk: true
};

export const initEnvironment = (adhoc: any = {}): Promise<string> => {
  const config = merge(setting, adhoc);
  return new JsomNode().wizard(config);
};
