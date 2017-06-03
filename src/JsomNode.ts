import * as spauth from 'node-sp-auth';
import * as spRequest from 'sp-request';
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
    private request: spRequest.ISPRequest;
    private headers: any;
    private digest: string;

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

        let creds = {
            ...this.settings.authOptions,
            password:
                (this.settings.authOptions as any).password &&
                cpass.decode((this.settings.authOptions as any).password)
        };

        this.request = spRequest.create(creds);

        return Promise.all([
            <any>spauth.getAuth(this.settings.siteUrl, creds)
            // spRequest.create(creds).requestDigest(this.settings.siteUrl)
        ])
            .then(response => {
                this.headers = response[0].headers;
                // this.digest = response[1];
                return {
                    headers: this.headers
                    // digest: this.digest
                };
            });
    }

    private mimicBrowserEnvironment() {

        // Sys$Net$XMLHttpExecutor$executeRequest

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
                webServerRelativeUrl: `/${
                    this.settings.siteUrl
                        .replace('://', '___').split('/').slice(1, 100).join('/')
                    }`
            }
        };

        // global.formdigest = {
        //     value: this.digest, // 'DUMMY VALUE',
        //     tagName: 'INPUT',
        //     type: 'hidden'
        // };

        global.document = {
            documentElement: {},
            URL: '',
            // getElementsByName: (name) => {
            //     // console.log('getElementsByName', name);
            //     if (name === '__REQUESTDIGEST') {
            //         return [global.formdigest];
            //     }
            // },
            getElementsByTagName: (name) => {
                // console.log('getElementsByTagName', name);
                return [];
            }
        };

        // tslint:disable-next-line:no-empty
        // global.NotifyScriptLoadedAndExecuteWaitingJobs = (scriptFileName) => {};

        global.Type = Function;

        this.registerNamespace('Sys');
        this.registerNamespace('SP.UI');
        this.registerNamespace('Microsoft.SharePoint.Packaging');

        // tslint:disable-next-line:no-empty
        // global.RegisterModuleInit = () => {};

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

        (<any>Sys.Net)._WebRequestManager.prototype
            .executeRequest = (wReq: any) => {

                let isJsom: boolean = wReq._url.indexOf('/_vti_bin/client.svc/ProcessQuery') !== -1;

                let jsomHeaders = {};
                if (isJsom) {
                    jsomHeaders = {
                        'X-Requested-With': 'XMLHttpRequest',
                        'X-RequestDigest': this.digest,
                        'Content-Length': (wReq._body || '').length
                    };
                }

                if (wReq._httpVerb.toLowerCase() === 'post') {
                    this.request.post({
                        url: `${
                            this.settings.siteUrl
                                .replace('://', '___')
                                .split('/')[0]
                                .replace('___', '://')
                            }${wReq._url}`,
                        headers: {
                            ...wReq._headers,
                            ...jsomHeaders
                        },
                        body: wReq._body,
                        json: !isJsom
                    })
                        .then(response => {

                            let responseData = response.body;
                            if (wReq._url.indexOf('/_api/contextinfo') !== -1) {
                                this.digest = responseData.d.GetContextWebInformation.FormDigestValue;
                                // FormDigestTimeoutSeconds
                            }

                            if (!isJsom) {
                                responseData = JSON.stringify(responseData);
                            }

                            wReq._events._list.completed[0]({
                                _xmlHttpRequest: {
                                    status: 200,
                                    responseText: responseData
                                },
                                get_aborted: () => {
                                    return false;
                                },
                                get_timedOut: () => {
                                    return false;
                                },
                                _SPError_: undefined,
                                get_statusCode: () => {
                                    return 200;
                                },
                                get_responseData: () => {
                                    return responseData;
                                },
                                get_responseAvailable: () => {
                                    return true;
                                },
                                getResponseHeader: (header) => {
                                    return response.headers[header.toLowerCase()];
                                }
                            });
                        })
                        .catch(console.log);
                }

            };
    }

    private setDocumentProperty(prop: string, value: any) {
        global.document = global.document || {};
        global.document[prop] = value;
    }

}
