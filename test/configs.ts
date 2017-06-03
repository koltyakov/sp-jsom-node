import { IEnvironmentConfig } from '../src/interfaces';

export const Environments: IEnvironmentConfig[] = [
    {
        environmentName: 'SharePoint Online',
        configPath: './config/integration/private.spo.json',
        legacy: false,
        envCode: 'spo'
    }, {
        environmentName: 'On-Premise 2016',
        configPath: './config/integration/private.2016.json',
        legacy: false,
        envCode: '16'
    }, {
        environmentName: 'On-Premise 2013',
        configPath: './config/integration/private.2013.json',
        legacy: true,
        envCode: '15'
    }
];
