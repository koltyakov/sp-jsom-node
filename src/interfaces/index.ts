import { IAuthOptions } from 'node-sp-auth';
import { IAuthConfigSettings } from 'node-sp-auth-config';
import { ISPRequest } from 'sp-request';

export type JsomModule =
  'core' |
  'publishing' |
  'taxonomy' |
  'userprofiles' |
  'documentmanagement' |
  'workmanagement' |
  'policy' |
  'project';

export interface IJsomNodeSettings {
  siteUrl?: string;
  authOptions?: IAuthOptions;
  config?: IAuthConfigSettings;
  modules?: JsomModule[];
  envCode?: string;
}

export interface IJsomNodeInitSettings extends IJsomNodeSettings {
  siteUrl: string;
  authOptions: IAuthOptions;
}

export interface IJsomModule {
  [name: string]: string[];
}

export interface IRequestsCache {
  [siteUrl: string]: ISPRequest;
}

export interface IEnvironmentConfig {
  environmentName: string;
  configPath: string;
  envCode: string;
  legacy?: boolean;
}
