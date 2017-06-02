import * as spauth from 'node-sp-auth';
import * as https from 'https';
import * as path from 'path';

import { AuthConfig as SPAuthConfigirator } from 'node-sp-auth-config';
import { XMLHttpRequest } from 'xmlhttprequest';
import { Cpass } from 'cpass';

import { Utils } from './utils';
import { IJsomNodeSettings } from './interfaces';

import { JsomModules, lcid } from './config';

declare let global: any;

const cpass = new Cpass();

export class JsomNode {

    private settings: IJsomNodeSettings;
    private headers: any;

    constructor(settings: IJsomNodeSettings) {
        this.settings = settings;
        // this.createRequestClient();
        this.mimicBrowserEnvironment();
        this.loadJsomScripts(this.settings.modules, this.settings.envCode);
        this.setDocumentProperty('URL', this.settings.siteUrl);
    }

    public createRequestClient(): Promise<any> {
        // global.XMLHttpRequest = XMLHttpRequest;
        // XMLHttpRequest.authcookies =

        return <any>spauth.getAuth(this.settings.siteUrl, {
            ...this.settings.authOptions,
            password:
                (this.settings.authOptions as any).password &&
                cpass.decode((this.settings.authOptions as any).password)
        })
            .then(response => {
                this.headers = response.headers;
                return response.headers;
            });
    }

    private mimicBrowserEnvironment() {

        global.XMLHttpRequest = () => {
            let invocation = new XMLHttpRequest();
            invocation.setDisableHeaderCheck(true);
            // request.setRequestHeader('Authorization', this.headers.Cookie || this.headers.Authorization);
            return invocation;
        };

        global.navigator = {
            userAgent: 'sp-jsom-node'
        };

        global.window = {
            location: {
                href: '',
                pathname: ''
            },
            document: {
                cookie: ''
            },
            setTimeout: global.setTimeout,
            clearTimeout: global.clearTimeout,
            // tslint:disable-next-line:no-empty
            attachEvent: () => {},
            _spPageContextInfo: {
                webServerRelativeUrl: `/${this.settings.siteUrl.replace('://', '___').split('/').slice(1, 100).join('/')}`
            }
        };

        global.formdigest = {
            value: 'DUMMY VALUE',
            // value: '0xCBCCA93892764E227629A4D742FD2A3C8C7C72D89046ECFA31E4A9069992DABC10C6D9FC4EBBEF' +
            //        '811E6DB206252FBF427602418654B5F98EF000B4CD0FAB6C28,02 Jun 2017 12:35:22 -0000',
            tagName: 'INPUT',
            type: 'hidden'
        };

        global.document = {
            documentElement: {},
            URL: '',
            getElementsByName: (name) => {
                if (name === '__REQUESTDIGEST') {
                    return [global.formdigest];
                }
            },
            getElementsByTagName: (name) => {
                return [];
            }
        };

        // global.window.escapeUrlForCallback = escapeUrlForCallback;

        // tslint:disable-next-line:no-empty
        global.NotifyScriptLoadedAndExecuteWaitingJobs = (scriptFileName) => {};
        global.Type = Function;

        this.registerNamespace('Sys');
        this.registerNamespace('SP.UI');
        this.registerNamespace('Microsoft.SharePoint.Packaging');

        // tslint:disable-next-line:no-empty
        global.RegisterModuleInit = () => {};

    }

    private loadJsomScripts(modules: string[] = ['core'], envCode: string = 'spo') {
        modules.forEach((module: string) => {
            JsomModules[module].forEach(jsomScript => {
                let filePath: string = path.join(__dirname, '..', 'jsom', envCode, jsomScript.replace('{{lcid}}', lcid));
                require(filePath);
                if (jsomScript === 'msajaxbundle.debug.js') {
                    this.patchMsAjax();
                }
            });
        });
    }

    private registerNamespace(namespaceString: string) {
        let curNs = global;
        global.window = global.window || {};
        namespaceString.split('.').forEach(function(nsName) {
            if (typeof curNs[nsName] === 'undefined') {
                curNs[nsName] = new Object();
            }
            curNs = curNs[nsName];
            curNs.__namespace = true;
        });
        let nsName = namespaceString.split('.')[0];
        global.window[nsName] = global[nsName];
    }

    private patchMsAjax() {
        let origRegisterInterface = Type.prototype.registerInterface;
        Type.prototype.registerInterface = function(typeName) {
            if (['IEnumerator', 'IEnumerable', 'IDisposable'].indexOf(typeName) !== -1) {
                if (global[typeName]) {
                    this.prototype.constructor = this;
                    this.__typeName = typeName;
                    this.__interface = true;
                    return this;
                }
                global[typeName] = this;
            }
            return origRegisterInterface.apply(this, [].slice.call(arguments));
        };
    }

    private setDocumentProperty(prop: string, value: any) {
        global.document = global.document || {};
        global.document[prop] = value;
    }

}
