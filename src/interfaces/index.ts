import { IAuthOptions } from 'node-sp-auth';

export interface IAuthContext {
    siteUrl: string;
    authOptions?: IAuthOptions;
}

export interface IJsomModule {
    [name: string]: string[];
}

export interface IEnvironmentConfig {
    environmentName: string;
    configPath: string;
    envCode: string;
    legacy?: boolean;
}
