import * as deepAssign from 'deep-assign';
import { JsomNode, IJsomNodeSettings } from './../../../src/index';

export const settings: IJsomNodeSettings = {
  config: {
    configPath: './config/private.json',
    encryptPassword: true,
    saveConfigOnDisk: true
  }
};

export const initEnvironment = (adhoc: any = {}): Promise<IJsomNodeSettings> => {
  let config: IJsomNodeSettings = deepAssign(settings, adhoc);
  return (new JsomNode(config)).wizard();
};
