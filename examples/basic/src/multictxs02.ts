import * as path from 'path';
import { JsomNode, IJsomNodeSettings } from 'sp-jsom-node';

const creds1 = require(path.join(__dirname, '../config/private.env1.json'));
const creds2 = require(path.join(__dirname, '../config/private.env2.json'));

const settings1: IJsomNodeSettings = {
  siteUrl: creds1.siteUrl,
  authOptions: { ...creds1 }
};

const settings2: IJsomNodeSettings = {
  siteUrl: creds2.siteUrl,
  authOptions: { ...creds2 }
};

(async () => {

  // Initiating first environment context
  new JsomNode(settings1).init();

  const ctx1 = new SP.ClientContext(creds1.siteUrl);
  const web1 = ctx1.get_web();
  ctx1.load(web1, 'Title');
  await ctx1.executeQueryPromise();

  console.log(`Web 1: ${web1.get_title()}`);

  // Initiating second environment context
  // it can be even a different farm
  // after initiation of the next context previous one can't be used without reinitiation
  new JsomNode(settings1).init();
  const ctx2 = new SP.ClientContext(creds2.siteUrl);
  const web2 = ctx2.get_web();
  ctx2.load(web2, 'Title');
  await ctx2.executeQueryPromise();

  console.log(`Web 2: ${web2.get_title()}`);

})()
  .catch(console.log);
