import * as path from 'path';
import { JsomNode, IJsomNodeContext } from 'sp-jsom-node';

const creds = require(path.join(__dirname, '../config/private.json'));

const x: IJsomNodeContext = {
  siteUrl: creds.siteUrl, // I.e. site collection url
  authOptions: { ...creds }
};

(async () => {

  new JsomNode().init(x);

  // Creating contexts for webs under the same creds' context
  const ctx1 = new SP.ClientContext(`${creds.siteUrl}/1`);
  const ctx2 = new SP.ClientContext(`${creds.siteUrl}/2`);

  const web1 = ctx1.get_web();
  const web2 = ctx2.get_web();

  ctx1.load(web1, 'Title');
  ctx2.load(web2, 'Title');

  await ctx1.executeQueryPromise();
  await ctx2.executeQueryPromise();

  console.log(`Web 1: ${web1.get_title()}`);
  console.log(`Web 2: ${web2.get_title()}`);

})()
  .catch(console.log);
