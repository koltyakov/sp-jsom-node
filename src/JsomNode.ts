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

  private static ctxs: {
    [ctx: string]: ISPRequest;
  } = {};

  private settings: IJsomNodeSettings;
  private context: IJsomNodeContext;
  private request: ISPRequest;
  private agent: https.Agent = new https.Agent({
    rejectUnauthorized: false,
    keepAlive: true,
    keepAliveMsecs: 10000
  });
  private instanceId: string;

  constructor(settings: IJsomNodeSettings = {}) {
    this.settings = settings;
    this.instanceId = utils.getGuid();
  }

  // Init JsomNode environment
  public init(context: IJsomNodeContext): JsomNode {
    const authOptions = context.authOptions;
    const cpass = new Cpass();
    const encodable = ['password', 'clientId', 'clientSecret'];
    for (const prop of encodable) {
      if (authOptions[prop]) {
        authOptions[prop] = cpass.decode((authOptions[prop]));
      }
    }
    this.context = { ...context, authOptions };
    this.request = createSPRequest(this.context.authOptions);
    this.mimicBrowser();
    this.loadScripts(this.settings.modules, this.settings.envCode);
    this.proxyRequestManager();
    return this;
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

  public getContext(siteUrl?: string): SP.ClientContext {
    JsomNode.ctxs[this.instanceId] = this.request;
    siteUrl = siteUrl || this.context.siteUrl;
    const ctx = new SP.ClientContext(siteUrl);
    ctx.add_executingWebRequest((_sender, args) => {
      (args.get_webRequest() as any)._headers['X-JsomNode-InstanceID'] = this.instanceId;
    });
    return ctx;
  }

  public dropContext() {
    delete JsomNode.ctxs[this.instanceId];
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
        namespaceString.split('.').forEach((nsName) => {
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
      registerNamespace('SP');
      registerNamespace('Microsoft');
      registerNamespace('PS');
      registerNamespace('Srch');

      // For search.clientcontrols.debug.js
      // ToDO: Verify if ever needed in Node.js app
      try {
        registerNamespace('SP.Utilities');
        global.SP.Utilities.HttpUtility = SP.Utilities.HttpUtility || {};
      } catch (ex) { /**/ }

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
            let filePath: string = process.env.JSOM_ASSETS_FOLDER
              ? path.join(process.env.JSOM_ASSETS_FOLDER, envCode, jsomScript.replace('{{lcid}}', lcid))
              : path.join(__dirname, '..', 'jsom', envCode, jsomScript.replace('{{lcid}}', lcid));

            // if (!fs.existsSync(filePath)) {
            //   filePath = path.join(__dirname, 'jsom', envCode, jsomScript.replace('{{lcid}}', lcid));
            // }

            // ====>
            if (filePath.substring(0, 1) === '\\') {
              filePath = '.' + filePath.replace(/\\/g, '/');
            }
            utils.require(filePath); // Load a JSOM script
            // ====<

            // Patch Microsoft Ajax library
            if (jsomScript === 'msajaxbundle.debug.js') {
              this.patchMicrosoftAjax();
            }
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

    let request: ISPRequest = this.request;

    (Sys.Net as any)._WebRequestManager.prototype.executeRequest = (wReq: any) => {

      const instanceId = wReq._headers['X-JsomNode-InstanceID'];
      request = JsomNode.ctxs[instanceId] || request;

      const hostUrl = this.context.siteUrl.split('/').splice(0, 3).join('/');
      const requestUrl: string = utils.isUrlAbsolute(wReq._url) ? wReq._url : `${hostUrl}${wReq._url}`;
      const webAbsoluteUrl = requestUrl.split('/_api')[0].split('/_vti_bin')[0];

      request.requestDigest(webAbsoluteUrl)
        .then((digest) => {

          const isJsom: boolean = wReq._url.indexOf('/_vti_bin/client.svc/ProcessQuery') !== -1;

          const jsomHeaders = !isJsom ? {} : {
            'X-Requested-With': 'XMLHttpRequest',
            'X-RequestDigest': digest
            // 'Content-Length': wReq._body && wReq._body.length
          };

          if (wReq._httpVerb.toLowerCase() === 'post') {
            return request.post({
              url: requestUrl,
              headers: {
                ...wReq._headers,
                ...jsomHeaders
              },
              body: wReq._body,
              json: !isJsom,
              agent: utils.isUrlHttps(requestUrl) ? this.agent : undefined
            })
              .then((response) => {
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

}
