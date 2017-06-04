# Using JSOM (CSOM, SharePoint Client Side Object Model) in Node.js

## Intro

It's not a secret that it's theoretically feasible to execute SharePoint Client Side Object Model in Node.js. Some folks found a way to master [JSOM in Node.js's context](https://gist.github.com/lstak/2404924) around 5 years ago from now.

Unfortunately, there was no solid solution as a drop in library. And you could struggle for hours before the "hack" will work for you. And when you needed to switch to a different SharePoint environment with different authentication strategy and your were in trouble.

You might say, how about [CSOMNode](https://github.com/vgrem/CSOMNode) project by Vadim Gremyachev, which is already a drop in library ready to use. Well, it's a nice library and it was the inspiration point for me, actually, but it is limited with SAML and Add-in Only authentication strategies and I'm not sure that guys have enough time to support the project with delivering new breaking features. At least the issue asking for NTLM authentication is unanswered for eight months, another issue with authentication also stays untouched. I can understand it as rough time limitations of the author for such side projects.

In my case, I needed the same exact authentication methods which are missed in CSOMNode. On other projects, I use [node-sp-auth](https://www.npmjs.com/package/node-sp-auth), which provides a plenty of different authentication strategies and have a wonderful support from the author.

Also I needed JSOM in Node.js functionality very urgently for one of recent tasks with integration testing.

My first idea was to contribute to CSOMNode and suggest or integrate `node-sp-auth` by myself and send a Pull Request. After spending some time with the project's code I understood that my PR won't likely be merged soon or at all. I know from my own experience that when an author has an opinion about his approaches, code style, structure, etc., you just can't provide too complex PR and breaking changes even if they are awesome. My changes were going to be such, I mean complex, it's up to you to decide if it's awesome. Also, I have an allergy for writing libraries in pure JavaScript lately and omitting linting rules. But that's my own personal requirement for the code that should be supported later on.

With all these circumstances in mind I started writing my own version of the library for landing JSOM into Node.js context with a variety of authentication mechanisms.

## JSOM in Node.js

The algorithm of landing JSOM to Node in general is pretty simple:
- Adjust global Node.js context to pretend to be a browser ([in code](https://github.com/koltyakov/sp-jsom-node/blob/master/src/JsomNode.ts#L75))
- Load and eval JSOM JavaScript files' content in a specific order ([in code](https://github.com/koltyakov/sp-jsom-node/blob/master/src/JsomNode.ts#L142))
- Patch some variables and object to eliminate a couple of issues (e.i. [microsoft ajax](https://github.com/koltyakov/sp-jsom-node/blob/master/src/JsomNode.ts#L162))
- Inject authentication headers into the requests to the server ([in code](https://github.com/koltyakov/sp-jsom-node/blob/master/src/JsomNode.ts#L179))

Mimic browser, loading JSOM JavaScripts and patching variables and object is a trivial part, and mostly had been taken from CSOMNode with some refactoring and conversion to TypeScript. You could check a specific parts in code.

Injecting authentication headers into the requests is really the most complex part.

JavaScript Client Side Object Model uses Microsoft Ajax library and XmlHttpRequest. What can I say?... I don't like their company much.

Initially I planned getting authentication headers and injecting them to all requests in `add_executingWebRequest` method.

```javascript
clientContext.add_executingWebRequest((sender, e) => {
    let headers = e.get_webRequest().get_headers();
    for (let header of Object.keys(auth)) {
        if (['Cookie', 'Authorization'].indexOf(header) !== -1) {
            headers[header] = auth[header];
        }
    }
});
```

As a result, requests are sent with custom headers.

And it worked... only to FedAuth cookies and Bearer authorization... and didn't for NTLM tokens for example.

The struggle was hard, really hard. I ended up with the idea that I should not use any XmlHttpRequest emulators and wrap my own proxy level into WebRequestManager's `executeRequest` method.

Original `Sys.Net._WebRequestManager.prototype.executeRequest` receives web request object and applies it to XmlHttpRequest.

In my [implementation](https://github.com/koltyakov/sp-jsom-node/blob/master/src/JsomNode.ts#L179), Sys.Net._WebRequestManager.prototype.executeRequest is completely rewritten to use [sp-request](https://www.npmjs.com/package/sp-request). It's in charge of injecting auth headers and X-RequestDigest, which works smoothly for almost any kind of auth, including NTML, ADFS and FBA.

## Using examples

Oh, so much lyrics above. Let's start coding JSOM in Node.js without headache.

Let me introduce you [`sp-jsom-node`](https://github.com/koltyakov/sp-jsom-node) library, or JsomNode.

![JsomNode Demo](https://raw.githubusercontent.com/koltyakov/sp-jsom-node/master/docs/imgs/JsomNode.demo.gif)

First, we need a Node.js project and install the library:

```bash
npm install sp-jsom-node --save
```

After `sp-jsom-node` is installed, it can be used in TypeScript or JavaScript. I'm going to provide all examples in TypeScript and I assume you have TypeScript global modules (like, typescript, ts-node, tslint, etc.) installed.

Next, let's create an index.ts (or any) and paste in the following code snippet:

```javascript
import { JsomNode } from 'sp-jsom-node';

(new JsomNode()).wizard().then((settings) => {

    // Here we are, ready fo JSOM

    const ctx = SP.ClientContext.get_current();
    const oWeb = ctx.get_web();

    ctx.load(oWeb);

    ctx.executeQueryAsync(() => {
        console.log(oWeb.get_title());
    }, (sender, args) => {
        console.log(args.get_message());
    });


}).catch(console.log);
```

This is the minimal setup without overwhelming configuration.

In this mode, without initial configuration, if we run `ts-node ./index.ts` we'll be prompted to target to a specific SharePoint site and provide credentials. A subsequent script run re-uses saved configuration parameters and doesn't prompt no more.

If you do not like wizards and prefer manual configuration, no problem:

```javascript
import { JsomNode, IJsomNodeSettings } from 'sp-jsom-node';

let settings: any = require('./config/private.json');

let jsomNodeOptions: IJsomNodeSettings = {
    siteUrl: settings.siteUrl,
    authOptions: {
        ...(settings as any)
    }
};

(new JsomNode(jsomNodeOptions)).init();

/// ... <<< JSOM can be used here
```

The project contains integration tests (I test recent libraries with SharePoint Online, SharePoint 2016 and 2013) and example for a quick start which can be downloaded for first experiments with the library.

## Conclusion

If you need JSOM in Node.js for any crazy or rational reasons and something prevented you from doing this, welcome on board with `sp-jsom-node`. And don't forget to comment about your use cases.

I truly hope the library will find it's users and that it wasn't developed only for the tasks I needed to be solved.