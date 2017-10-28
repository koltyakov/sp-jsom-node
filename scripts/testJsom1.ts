import { JsomNode, IJsomNodeSettings } from '../src';

declare let global: any;

let settings: any = require('../config/integration/private.2013.json');

console.log(settings.siteUrl);

(new JsomNode({
  siteUrl: settings.siteUrl,
  authOptions: {
    ...(settings as any)
  },
  modules: ['core', 'taxonomy', 'userprofiles', 'publishing', 'policy']
})).init();

/////

// let ctx = SP.ClientContext.get_current();
// let ctx = new SP.ClientContext(`/d/gexpo/pnp`);

// let oWeb = ctx.get_web();
// let oLists = oWeb.get_lists();

// ctx.load(oWeb);
// ctx.load(oLists);

// ctx.executeQueryAsync(() => {
//     console.log(oWeb.get_title());
//     console.log(oLists.get_data().map(list => list.get_title()));
// }, (sender, args) => {
//     console.log(`Error: ${args.get_message()}`);
//     console.log(args.get_stackTrace());
// });

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
