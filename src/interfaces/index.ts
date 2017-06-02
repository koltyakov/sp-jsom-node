import { IAuthOptions } from 'node-sp-auth';
import { IAuthConfigSettings } from 'node-sp-auth-config';

export interface IJsomNodeSettings {
    siteUrl?: string;
    authOptions?: IAuthOptions;
    config?: IAuthConfigSettings;
    modules?: string[];
    envCode?: string;
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
