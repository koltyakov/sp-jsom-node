import * as deepAssign from 'deep-assign';
import { JsomNode, IConfigSettings } from './../../../src/index';

export const setting: IConfigSettings = {
  configPath: './config/private.json',
  encryptPassword: true,
  saveConfigOnDisk: true
};

export const initEnvironment = (adhoc: any = {}): Promise<string> => {
  const config = deepAssign(setting, adhoc);
  return new JsomNode().wizard(config);
};
