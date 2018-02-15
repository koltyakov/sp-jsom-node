import { join } from 'path';
import { JsomNode, IJsomNodeInitSettings } from './../../src/index'; // 'sp-jsom-node';

const conf1 = require(join(process.cwd(), './config/integration/private.2016.json')); // Config should exist
const conf2 = require(join(process.cwd(), './config/integration/private.2013.json')); // Config should exist

const jsomConf1: IJsomNodeInitSettings = {
  siteUrl: conf1.siteUrl,
  authOptions: { ...conf1 }
};

const jsomConf2: IJsomNodeInitSettings = {
  siteUrl: conf2.siteUrl,
  authOptions: { ...conf2 }
};

const jsom1 = new JsomNode(jsomConf1); // Environment 1
const jsom2 = new JsomNode(jsomConf2); // Environment 2

(async () => {

  // Switching to env1

  jsom1.init();

  const ctx1 = new SP.ClientContext(conf1.siteUrl);
  const oWeb1 = ctx1.get_web();

  ctx1.load(oWeb1);

  await ctx1.executeQueryPromise();

  console.log(`Web 1: `, oWeb1.get_title().length + ' chars');

  // Switching to env2

  jsom2.init();

  const ctx2 = new SP.ClientContext(conf2.siteUrl);
  const oWeb2 = ctx2.get_web();

  ctx2.load(oWeb2);

  await ctx2.executeQueryPromise();

  console.log(`Web 2: `, oWeb2.get_title().length + ' chars');

  // Switching to env1

  jsom1.init();

  const oListsCollection1 = oWeb1.get_lists();
  ctx1.load(oListsCollection1, 'Include(Title)');

  await ctx1.executeQueryPromise();

  console.log(`Web 1 lists:`, oListsCollection1.get_data().length); // .map(l => l.get_title()));

  // Switching to env1

  jsom2.init();

  const oListsCollection2 = oWeb2.get_lists();
  ctx2.load(oListsCollection2, 'Include(Title)');

  await ctx2.executeQueryPromise();

  console.log(`Web 2 lists:`, oListsCollection2.get_data().length); // .map(l => l.get_title()));

})()
  .catch(console.log);
