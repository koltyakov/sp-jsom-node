import { IAuthOptions } from 'node-sp-auth';
import { IAuthConfigSettings } from 'node-sp-auth-config';
import { ISPRequest } from 'sp-request';

export type JsomModule =
  | 'core'
  | 'search'
  | 'publishing'
  | 'taxonomy'
  | 'userprofiles'
  | 'documentmanagement'
  | 'workmanagement'
  | 'policy'
  | 'project';

export interface IJsomNodeSettings {
  modules?: JsomModule[];
  envCode?: 'spo' | '16' | '15' | 'string';
}

export interface IJsomNodeContext extends IJsomNodeSettings {
  siteUrl: string;
  authOptions: IAuthOptions;
}

export interface IConfigSettings extends IJsomNodeSettings, IAuthConfigSettings {}

export interface IJsomModule {
  [name: string]: string[];
}

export interface IRequestsCache {
  [siteUrl: string]: ISPRequest;
}
