# sp-jsom-node - SharePoint JavaScript Object Model for Node.js

[![NPM](https://nodei.co/npm/sp-jsom-node.png?mini=true&downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/sp-jsom-node/)

[![npm version](https://badge.fury.io/js/sp-jsom-node.svg)](https://badge.fury.io/js/sp-jsom-node)
[![Downloads](https://img.shields.io/npm/dm/sp-jsom-node.svg)](https://www.npmjs.com/package/sp-jsom-node)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/sharepoint-node/Lobby)

`sp-jsom-node` provides a feasibility of using JSOM (CSOM, SharePoint Client Object Model) in Node.js.

`sp-jsom-node` patches global variables and request client which let's `JSOM` used to behave as if it were in it's usual environment - a browser's SharePoint page.

## Supported SharePoint versions

- SharePoint Online, Project Online
- SharePoint 2016, Project Server
- SharePoint 2013

## APIs list

- `core` - core JSOM module (loaded by default at first place)
- `publishing` - [sp.publishing.js](https://msdn.microsoft.com/en-us/library/office/jj607192.aspx)
- `taxonomy` - [sp.taxonomy.js](https://msdn.microsoft.com/en-us/library/office/jj857114.aspx)
- `userprofiles` - [sp.userprofiles.js](https://msdn.microsoft.com/en-us/library/office/jj642927.aspx)
- `documentmanagement` - [sp.documentmanagement.js](https://msdn.microsoft.com/en-us/library/office/jj607384.aspx)
- `workmanagement` - [sp.workmanagement.js](https://msdn.microsoft.com/en-us/library/office/jj607384.aspx)
- `policy` - sp.policy.js
- `project` - [PS.js](https://msdn.microsoft.com/en-us/library/office/jj669820.aspx) (Project Server API)

## Supported authentication scenarios

- SharePoint On-Premise (2013, 2016):
  - User credentials (NTLM)
  - Form-based authentication (FBA)
  - Add-In Only permissions
  - ADFS user credentials

- SharePoint Online:
  - User credentials (SAML)
  - Add-In Only permissions
  - ADFS user credentials

## Get started

### NPM

```bash
npm install sp-jsom-node --save
```

### Yarn

```bash
yarn add sp-jsom-node
```

## Usage examples

![JsomNode Demo](./docs/imgs/JsomNode.demo.gif)

### Minimal setup (TypeScript)

```javascript
import { JsomNode, IJsomNodeSettings } from 'sp-jsom-node';

let jsomNodeOptions: IJsomNodeSettings = {
  // ...
};

(new JsomNode(jsomNodeOptions)).wizard().then((settings) => {

  /// ... <<< JSOM can be used here

  let ctx = SP.ClientContext.get_current();
  // let ctx = SP.ClientContext(webRelativeUrl);

}).catch(console.log);

/// ... <<< JSOM can be used here if config file is already on disk
```

First wizard run propmts for SharePoint site url and credentials strategy parameters.

### Minimal setup (JavaScript)

```javascript
const JsomNode = require('sp-jsom-node').JsomNode;

(new JsomNode()).wizard().then((settings) => {

  /// ... <<< JSOM can be used here

  let ctx = SP.ClientContext.get_current();

}).catch(console.log);
```

### Initiation with parameters

```javascript
import { JsomNode, IJsomNodeSettings } from 'sp-jsom-node';

let settings: any = require('./config/private.json');
let jsomNodeOptions: IJsomNodeInitSettings = {
  siteUrl: settings.siteUrl,
  authOptions: {
    ...(settings as any)
  }
};

(new JsomNode(jsomNodeOptions)).init();

/// ... <<< JSOM can be used here

const ctx = SP.ClientContext.get_current();
const oWeb = ctx.get_web();
const oLists = oWeb.get_lists();

const listCreationInfo = new SP.ListCreationInformation();
listCreationInfo.set_title('New Lists');
listCreationInfo.set_templateType(100);
const oList = oLists.add(listCreationInfo);

ctx.load(oList);
ctx.executeQueryAsync(() => {
  console.log(oList);
}, (sender, args) => {
  console.log(args.get_message());
});

```

### Async/Await usage

Client context runtime is extended with `executeQueryPromise` - promisified version of `executeQueryAsync`. Which allows coding with async/await in a "synchronous" handy style, having elegant and easily maintainable code.

```javascript
import { JsomNode, IJsomNodeInitSettings } from 'sp-jsom-node';
let jsomNodeOptions: IJsomNodeInitSettings = {
  siteUrl: settings.siteUrl,
  authOptions: {
    ...(settings as any)
  }
};
(new JsomNode(jsomNodeOptions)).init();
(async () => {

  const clientContex = SP.ClientContext.get_current();
  let oListsCollection = clientContext.get_web().get_lists();

  clientContext.load(oListsCollection, 'Include(Title)');
  await clientContext.executeQueryPromise(); // Using JSOM extension

  let listsTitlesArr = oListsCollection.get_data()
    .map(l => l.get_title());

  console.log('Lists', listsTitlesArr);

})();
```

### Modules

By default, only core modules are loaded.
Additional CSOM features can be requested in `modules` setting.

[Modules list](#apis-list).

```javascript
import { JsomNode, IJsomNodeInitSettings } from 'sp-jsom-node';

let settings: any = require('./config/private.json');
let jsomNodeOptions: IJsomNodeInitSettings = {
  siteUrl: settings.siteUrl,
  authOptions: {
    ...(settings as any)
  },
  modules: [ 'taxonomy', 'userprofiles' ]
};

(new JsomNode(jsomNodeOptions)).init();

/// ... <<< JSOM can be used here
```

### Project server (PM.js)

```javascript
import { JsomNode, IJsomNodeInitSettings } from 'sp-jsom-node';

let settings: any = require('./config/private.json');
let jsomNodeOptions: IJsomNodeInitSettings = {
  siteUrl: settings.siteUrl,
  authOptions: {
    ...(settings as any)
  },
  modules: [ 'project' ]
};

(new JsomNode(jsomNodeOptions)).init();

(async () => {

  // API Reference - https://msdn.microsoft.com/en-us/library/office/jj669820.aspx
  const projCtx = PS.ProjectContext.get_current();
  let projects = projCtx.get_projects();
  projCtx.load(projects, 'Include(Name, Id)');
  await projCtx.executeQueryPromise();

  console.log(projects.get_data().map(p => p.get_name()));

})();
```

#### JSOM Node Settings options

- `siteUrl`: string; // Optional SPWeb url
- `authOptions`: IAuthOptions; `node-sp-auth` [credentials options](https://github.com/s-KaiNet/node-sp-auth)

- `config`?: IAuthConf; `node-sp-auth-config` [options](https://github.com/koltyakov/node-sp-auth-config)
  - `configPath`?: string; // Path to auth config .json | Default is './config/private.json'
  - `encryptPassword`?: boolean; // Encrypts password to a machine-bind hash | Default is 'true'
  - `saveConfigOnDisk`?: boolean; // Saves config .json to disk | Default is 'true'

- `modules`?: JsomModules[]; // On demand modules load | Default is ['core']
- `envCode`?: 'spo' | '16' | '15'; // Loads different version of JSOM javascripts | Default is 'spo'

Settings can be left blank. Auth options in such a case will be asked by `node-sp-auth-config` [options](https://github.com/koltyakov/node-sp-auth-config) in a wizard like approach.

### Settings scenarios

- No initial settings (defaults): wizard approach, covers console applications cases with user interaction
- With explicitly defined `authOptions`:
  - external tools is in charge for preparing auth credentials in `node-sp-auth` format
  - credentials should not be dumped on disc
- Config file with prepopulated credentials: schedule, job automation, continues integration

## Integration tests

```bash
npm run test
```

![Integration tests](./docs/imgs/mocha.jpg)

## Bundling scripts

When creating automation scripts for production environment, e.g. Azure Job or Function or embedded application like Electron, it can be important to bundle and minify sources with positive performant effect as a result.
Check [example](https://github.com/koltyakov/sp-jsom-node/tree/master/examples/basic) with bundling.

## Inspiration and references

This project was mostly inspired by [Vadim Gremyachev](https://github.com/vgrem)'s project - [CSOMNode](https://github.com/vgrem/CSOMNode), but implements JSOM in node in a bit different way, in TypeScript and supports different auth scenarious implemented in [node-sp-auth](https://github.com/s-KaiNet/node-sp-auth) by [Sergei Sergeev](https://github.com/s-KaiNet).
