import { IAuthOptions } from 'node-sp-auth';

export type IEnvironmentConfig = IPrivateEnvironmentConfig | ICiEnvironmentConfig;

interface IBaseEnvironmentConfig {
  environmentName: string;
  envCode: string;
  legacy?: boolean;
}

export interface IPrivateEnvironmentConfig extends IBaseEnvironmentConfig {
  configPath: string;
}

export interface ICiEnvironmentConfig extends IBaseEnvironmentConfig {
  siteUrl: string;
  authOptions: IAuthOptions;
}
