import { JsomNode, IJsomNodeSettings } from '../src';

declare let global: any;

(new JsomNode()).wizard().then((settings) => {

  let ctx = SP.ClientContext.get_current();
  let oWeb = ctx.get_web();
  ctx.load(oWeb);
  ctx.executeQueryAsync(() => {
    console.log(oWeb.get_title());
  }, (sender, args) => {
    console.log(`Error: ${args.get_message()}`);
  });

}).catch(console.log);
