import { JsomNode } from '../src';

declare let global: any;

let jsom = new JsomNode({
    siteUrl: 'http://demo-win.arvosys.com/d/gexpo'
});

let ctx = SP.ClientContext.get_current();
let oWeb = ctx.get_web();

console.log(oWeb);

ctx.load(oWeb);

ctx.executeQueryAsync(() => {
    console.log(oWeb);
}, (sender, args) => {
    console.log(`Error: ${args.get_message()}`);
});
