import { join } from 'path';
import { JsomNode, IJsomNodeContext } from '../../src/index'; // 'sp-jsom-node';

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

(async () => {

  const ctx1 = new JsomNode().init(envCtx1).getContext();
  const ctx2 = new JsomNode().init(envCtx2).getContext();

  const oWeb1 = ctx1.get_web();
  const oWeb2 = ctx2.get_web();

  ctx1.load(oWeb1);
  ctx2.load(oWeb2);

  await Promise.all([
    ctx1.executeQueryPromise(),
    ctx2.executeQueryPromise()
  ]);

  console.log(`Web 1: `, oWeb1.get_title().length + ' chars');
  console.log(`Web 2: `, oWeb2.get_title().length + ' chars');

})()
  .catch(console.log);
