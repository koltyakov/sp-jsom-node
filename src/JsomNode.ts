import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';

import { AuthConfig } from 'node-sp-auth-config';
import { create as createSPRequest, ISPRequest } from 'sp-request';
import { Cpass } from 'cpass';

import utils from './utils';
import { JsomModules, lcid } from './config';
import { IJsomNodeSettings, IConfigSettings, IJsomNodeContext, IRequestsCache } from './IJsomNode';

// Import JSOM ententions
import './extensions/definitions';
import { executeQueryPromise } from './extensions/executeQueryPromise';
// Import JSOM ententions

declare const global: any;

declare const sp_initialize: any;

export class JsomNode {

  private settings: IJsomNodeSettings;
  private context: IJsomNodeContext;
  private request: ISPRequest;
  private requestCache: IRequestsCache = {};
  private agent: https.Agent = new https.Agent({
    rejectUnauthorized: false,
    keepAlive: true,
    keepAliveMsecs: 10000
  });

  constructor(settings: IJsomNodeSettings = {}) {
    this.settings = settings;
  }

  // Init JsomNode environment
  public init(context: IJsomNodeContext) {
    const authOptions = context.authOptions;
    const cpass = new Cpass();
    const encodable = ['password', 'clientId', 'clientSecret'];
    for (const prop of encodable) {
      if (authOptions[prop]) {
        authOptions[prop] = cpass.decode((authOptions[prop]));
      }
    }
    this.context = { ...context, authOptions };
    this.mimicBrowser();
    this.loadScripts(this.settings.modules, this.settings.envCode);
    this.proxyRequestManager();
  }

  // Trigger wizard and init JsomNode environment
  public wizard(config?: IConfigSettings): Promise<string> {
    return new AuthConfig(config).getContext().then((ctx) => {
      this.context = {
        siteUrl: ctx.siteUrl,
        authOptions: ctx.authOptions
      };
      this.settings = {
        ...this.settings,
        ...{
          envCode: config.envCode,
          modules: config.modules
        }
      };
      this.init(this.context);
      return ctx.siteUrl;
    });
  }

  // Mimic environment to pretend as a browser
  private mimicBrowser() {

    // Navigator polyfil
    global.navigator = {
      userAgent: 'sp-jsom-node'
    };

    // Window polyfil
    global.window = {
      location: {
        href: '',
        pathname: ''
      },
      document: {
        cookie: '',
        URL: this.context.siteUrl
      },
      setTimeout: global.setTimeout,
      clearTimeout: global.clearTimeout,
      attachEvent: () => { /**/ },
      _spPageContextInfo: {
        webServerRelativeUrl: `/${this.context.siteUrl.split('/').splice(3, 100).join('/')}`
      }
    };

    // Document polyfil
    global.document = {
      documentElement: {},
      URL: '',
      getElementsByTagName: (name) => []
    };

    global.Type = Function;

    // tslint:disable-next-line:no-empty
    global.NotifyScriptLoadedAndExecuteWaitingJobs = (scriptFileName) => {};
    // tslint:disable-next-line:no-empty
    global.RegisterModuleInit = () => {};

    // For PS.js case only
    global.ExecuteOrDelayUntilScriptLoaded = (callback: () => void, jsomScript: string) => {
      jsomScript = jsomScript.replace('.debug.js', '').replace('.js', '') + '.debug.js';
      if (global.loadedJsomScripts.indexOf(jsomScript.toLowerCase()) === -1) {
        const filePath = path.join(__dirname, '..', 'jsom', global.envCode || 'spo', jsomScript);
        require(filePath);
        callback();
      } else {
        callback();
      }
    };

    // Register namespaces fix
    (() => {

      const registerNamespace = (namespaceString: string): void => {
        let curNs = global;
        global.window = global.window || {};
        namespaceString.split('.').forEach(nsName => {
          if (typeof curNs[nsName] === 'undefined') {
            curNs[nsName] = new Object();
          }
          curNs = curNs[nsName];
          curNs.__namespace = true;
        });
        const nsName = namespaceString.split('.')[0];
        global.window[nsName] = global[nsName];
      };

      registerNamespace('Sys');
      registerNamespace('SP.UI');
      registerNamespace('Microsoft.SharePoint.Packaging');
      registerNamespace('PS');

    })();

  }

  // Load JSOM scripts to global context
  private loadScripts(modules: string[] = ['core'], envCode: string = 'spo') {

    global.envCode = envCode;
    global.loadedJsomScripts = global.loadedJsomScripts || [];
    if (modules.indexOf('core') !== 0) { // Core module first
      modules = ['core'].concat(modules);
    }

    modules
      .filter((value, index, self) => self.indexOf(value) === index) // Only unique modules
      .forEach((module: string) => {
        JsomModules[module].forEach((jsomScript) => {
          // Ignore already loaded
          if (global.loadedJsomScripts.indexOf(jsomScript.toLowerCase()) === -1) {
            let filePath: string = path.join(
              __dirname, '..', 'jsom', envCode,
              jsomScript.replace('{{lcid}}', lcid)
            );

            if (!fs.existsSync(filePath)) {
              filePath = path.join(
                __dirname, 'jsom', envCode,
                jsomScript.replace('{{lcid}}', lcid)
              );
            }

            // ====>
            if (filePath.substring(0, 1) === '\\') {
              filePath = '.' + filePath.replace(/\\/g, '/');
            }
            utils.require(filePath); // Load a JSOM script
            // ====<

            // Patch Microsoft Ajax library
            jsomScript === 'msajaxbundle.debug.js' && this.patchMicrosoftAjax();
            // Register script as loaded
            global.loadedJsomScripts.push(jsomScript.toLowerCase());
          }
        });
      });

    // Apply JSOM extensions
    (() => {

      // Extending ClientContext
      (SP as any).ClientRuntimeContext.prototype.executeQueryPromise = function (): Promise<void> {
        return executeQueryPromise(this);
      };

    })();
  }

  // Escape Microsoft Ajax issues
  private patchMicrosoftAjax() {
    const origRegisterInterface = Type.prototype.registerInterface;
    Type.prototype.registerInterface = function (typeName) {
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
    (Sys.Net as any)._WebRequestManager.prototype.executeRequest = (wReq: any) => {

      const hostUrl = this.context.siteUrl.split('/').splice(0, 3).join('/');
      const requestUrl = `${hostUrl}${wReq._url.replace(hostUrl, '')}`;
      const webAbsoluteUrl = requestUrl.split('/_api')[0].split('/_vti_bin')[0];

      this.request.requestDigest(webAbsoluteUrl)
        .then((digest) => {

          const isJsom: boolean = wReq._url.indexOf('/_vti_bin/client.svc/ProcessQuery') !== -1;

          const jsomHeaders = !isJsom ? {} : {
            'X-Requested-With': 'XMLHttpRequest',
            'X-RequestDigest': digest
            // 'Content-Length': wReq._body && wReq._body.length
          };

          if (wReq._httpVerb.toLowerCase() === 'post') {
            return this.request.post({
              url: requestUrl,
              headers: {
                ...wReq._headers,
                ...jsomHeaders
              },
              body: wReq._body,
              json: !isJsom,
              agent: utils.isUrlHttps(requestUrl) ? this.agent : undefined
            }).then((response) => {
              const responseData = isJsom ? response.body : JSON.stringify(response.body);
              wReq._events._list.completed[0]({
                _xmlHttpRequest: {
                  status: response.statusCode,
                  responseText: responseData
                },
                get_statusCode: () => response.statusCode,
                get_responseData: () => responseData,
                getResponseHeader: (header) => response.headers[header.toLowerCase()],
                get_aborted: () => false,
                get_timedOut: () => false,
                get_responseAvailable: () => true
              });
            });
          }

        })
        .catch((error) => {
          throw new Error(error);
        });

    };
  }

  // Cache request client
  private getCachedRequest = (): ISPRequest => {
    this.request = this.requestCache[this.context.siteUrl] || createSPRequest(this.context.authOptions);
    this.requestCache[this.context.siteUrl] = this.request;
    return this.request;
  }

}
