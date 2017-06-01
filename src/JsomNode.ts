import * as spauth from 'node-sp-auth';

import * as https from 'https';
import * as path from 'path';

import { IAuthOptions } from 'node-sp-auth';
import { AuthConfig as SPAuthConfigirator } from 'node-sp-auth-config';
import { XMLHttpRequest } from 'xmlhttprequest';

import { Utils } from './utils';
import { IAuthContext } from './interfaces';

import { JsomModules, lcid } from './config';

declare let global: any;

export class JsomNode {

    private settings: IAuthContext;

    constructor(settings: IAuthContext) {
        this.settings = settings;
        this.mimicBrowserEnvironment();
    }

    private mimicBrowserEnvironment() {

        global.XMLHttpRequest = XMLHttpRequest;
        // XMLHttpRequest.authcookies =

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
            attachEvent: () => {}
        };

        global.formdigest = {
            value: 'DUMMY VALUE',
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

        this.loadJsomScripts(); // Config options
        this.setDocumentProperty('URL', this.settings.siteUrl);

    }

    private loadJsomScripts(modules: string[] = ['core'], envCode: string = '16') {
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
