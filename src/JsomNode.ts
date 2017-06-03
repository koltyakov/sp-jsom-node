import * as spRequest from 'sp-request';
import * as path from 'path';

import { AuthConfig as SPAuthConfigirator } from 'node-sp-auth-config';

import { Cpass } from 'cpass';

import { Utils } from './utils';
import { IJsomNodeSettings } from './interfaces';

import { JsomModules, lcid } from './config';

declare let global: any;

const cpass = new Cpass();

export class JsomNode {

    private settings: IJsomNodeSettings;
    private request: spRequest.ISPRequest;

    constructor(settings: IJsomNodeSettings) {
        this.settings = settings;
    }

    public init() {
        this.mimicBrowser();
        this.loadScripts(this.settings.modules, this.settings.envCode);
        this.proxyRequestManager();
        // this.setDocumentProperty('URL', this.settings.siteUrl);
    }

    // Mimic environment to pretend as a browser
    private mimicBrowser() {

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
            attachEvent: () => {
                //
            },
            _spPageContextInfo: {
                webServerRelativeUrl: `/${
                    this.settings.siteUrl
                        .replace('://', '___').split('/').slice(1, 100).join('/')
                    }`
            }
        };

        global.document = {
            documentElement: {},
            URL: '',
            getElementsByTagName: (name) => {
                return [];
            }
        };

        global.Type = Function;

        const registerNamespace = (namespaceString: string) => {
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
        };

        registerNamespace('Sys');
        registerNamespace('SP.UI');
        registerNamespace('Microsoft.SharePoint.Packaging');

    }

    // Load JSOM scripts to global context
    private loadScripts(modules: string[] = ['core'], envCode: string = 'spo') {
        global.loadedJsomScripts = global.loadedJsomScripts || [];
        modules.forEach((module: string) => {
            JsomModules[module].forEach(jsomScript => {
                if (global.loadedJsomScripts.indexOf(jsomScript) === -1) {
                    let filePath: string = path.join(
                        __dirname, '..', 'jsom', envCode,
                        jsomScript.replace('{{lcid}}', lcid)
                    );
                    require(filePath);
                    if (jsomScript === 'msajaxbundle.debug.js') {
                        this.patchMicrosoftAjax();
                    }
                    global.loadedJsomScripts.push(jsomScript);
                }
            });
        });
    }

    // Escape Microsoft Ajax issues
    private patchMicrosoftAjax() {
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

    // Proxy JSOM XmlHttpRequest through sp-request
    private proxyRequestManager() {
        this.request = spRequest.create({
            ...this.settings.authOptions,
            password:
                (this.settings.authOptions as any).password &&
                cpass.decode((this.settings.authOptions as any).password)
        });

        (<any>Sys.Net)._WebRequestManager.prototype
            .executeRequest = (wReq: any) => {

                let requestUrl = `${
                    this.settings.siteUrl
                        .replace('://', '___')
                        .split('/')[0]
                        .replace('___', '://')
                    }${wReq._url}`;

                let webAbsoluteUrl = requestUrl
                    .split('/_api')[0]
                    .split('/_vti_bin')[0];

                this.request.requestDigest(webAbsoluteUrl)
                    .then(digest => {

                        let isJsom: boolean = wReq._url.indexOf('/_vti_bin/client.svc/ProcessQuery') !== -1;

                        let jsomHeaders = !isJsom ? {} : {
                            'X-Requested-With': 'XMLHttpRequest',
                            'X-RequestDigest': digest,
                            'Content-Length': wReq._body && wReq._body.length
                        };

                        if (wReq._httpVerb.toLowerCase() === 'post') {
                            return this.request.post({
                                url: requestUrl,
                                headers: {
                                    ...wReq._headers,
                                    ...jsomHeaders
                                },
                                body: wReq._body,
                                json: !isJsom
                            }).then(response => {
                                let responseData = isJsom ? response.body : JSON.stringify(response.body);
                                wReq._events._list.completed[0]({
                                    _xmlHttpRequest: {
                                        status: response.statusCode,
                                        responseText: responseData
                                    },
                                    get_statusCode: () => {
                                        return response.statusCode;
                                    },
                                    get_responseData: () => {
                                        return responseData;
                                    },
                                    getResponseHeader: (header) => {
                                        return response.headers[header.toLowerCase()];
                                    },
                                    get_aborted: () => { return false; },
                                    get_timedOut: () => { return false; },
                                    get_responseAvailable: () => { return true; }
                                });
                            });
                        }
                    })
                    .catch((err: any) => {
                        throw new Error(err);
                    });

            };
    }

    // private setDocumentProperty(prop: string, value: any) {
    //     global.document = global.document || {};
    //     global.document[prop] = value;
    // }

}
