import { join } from 'path';
import { JsomNode, IJsomNodeContext } from './../../src/index'; // 'sp-jsom-node';

const conf1 = require(join(process.cwd(), './config/integration/private.2016.json')); // Config should exist
const conf2 = require(join(process.cwd(), './config/integration/private.2013.json')); // Config should exist

const envCtx1: IJsomNodeContext = {
  siteUrl: conf1.siteUrl,
  authOptions: { ...conf1 }
};

const envCtx2: IJsomNodeContext = {
  siteUrl: conf2.siteUrl,
  authOptions: { ...conf2 }
};

const jsom = new JsomNode();

(async () => {

  // Switching to env1

  jsom.init(envCtx1);

  const ctx1 = new SP.ClientContext(envCtx1.siteUrl);
  const oWeb1 = ctx1.get_web();

  ctx1.load(oWeb1);

  await ctx1.executeQueryPromise();

  console.log(`Web 1: `, oWeb1.get_title().length + ' chars');

  // Switching to env2

  jsom.init(envCtx2);

  const ctx2 = new SP.ClientContext(envCtx2.siteUrl);
  const oWeb2 = ctx2.get_web();

  ctx2.load(oWeb2);

  await ctx2.executeQueryPromise();

  console.log(`Web 2: `, oWeb2.get_title().length + ' chars');

  // Switching to env1

  jsom.init(envCtx1);

  const oListsCollection1 = oWeb1.get_lists();
  ctx1.load(oListsCollection1, 'Include(Title)');

  await ctx1.executeQueryPromise();

  console.log(`Web 1 lists:`, oListsCollection1.get_data().length); // .map(l => l.get_title()));

  // Switching to env2

  jsom.init(envCtx2);

  const oListsCollection2 = oWeb2.get_lists();
  ctx2.load(oListsCollection2, 'Include(Title)');

  await ctx2.executeQueryPromise();

  console.log(`Web 2 lists:`, oListsCollection2.get_data().length); // .map(l => l.get_title()));

})()
  .catch(console.log);
