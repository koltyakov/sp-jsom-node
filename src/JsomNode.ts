import * as spRequest from 'sp-request';
import * as path from 'path';
import { AuthConfig as SPAuthConfigirator } from 'node-sp-auth-config';
import { Cpass } from 'cpass';

import { JsomModules, lcid } from './config';
import { IJsomNodeSettings } from './interfaces';

declare let global: any;
declare let sp_initialize: any;

interface IRequestsCache {
    [siteUrl: string]: spRequest.ISPRequest;
}

export class JsomNode {

    private settings: IJsomNodeSettings;
    private spAuthConfigirator: SPAuthConfigirator;
    private request: spRequest.ISPRequest;
    private requestCache: IRequestsCache = {};

    constructor(settings: IJsomNodeSettings) {
        let config = settings.config || {};
        this.settings = {
            ...settings,
            config: {
                ...config,
                configPath: path.resolve(config.configPath || path.join(process.cwd(), 'config/private.json')),
                encryptPassword: typeof config.encryptPassword !== 'undefined' ? config.encryptPassword : true,
                saveConfigOnDisk: typeof config.saveConfigOnDisk !== 'undefined' ? config.saveConfigOnDisk : true
            }
        };
        if (typeof this.settings.authOptions !== 'undefined') {
            const cpass = new Cpass();
            (this.settings.authOptions as any).password = (this.settings.authOptions as any).password &&
                cpass.decode((this.settings.authOptions as any).password);
        }
        this.spAuthConfigirator = new SPAuthConfigirator(this.settings.config);
    }

    // Init JsomNode environment
    public init() {
        this.mimicBrowser();
        this.loadScripts(this.settings.modules, this.settings.envCode);
        this.proxyRequestManager();
    }

    // Trigger wizard and init JsomNode environment
    public wizard(): Promise<IJsomNodeSettings> {
        return new Promise((resolve, reject) => {
            if (typeof this.settings.authOptions === 'undefined') {
                this.spAuthConfigirator.getContext()
                    .then((context) => {
                        this.settings = {
                            ...this.settings,
                            ...context
                        };
                        this.init();
                        resolve(this.settings);
                    })
                    .catch((error: any) => {
                        reject(error);
                    });
            } else {
                resolve(this.settings);
            }
        });
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
                cookie: '',
                URL: this.settings.siteUrl
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

        this.request = this.getCachedRequest();

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

                // console.log(this.settings.siteUrl);
                // console.log(wReq._url);
                // console.log(webAbsoluteUrl);

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

    // Cache request client
    private getCachedRequest = (): spRequest.ISPRequest => {
        this.request = this.requestCache[this.settings.siteUrl] || spRequest.create(this.settings.authOptions);
        this.requestCache[this.settings.siteUrl] = this.request;
        return this.request;
    }

}
