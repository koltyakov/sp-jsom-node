import { JsomNode, IJsomNodeSettings } from '../src';

declare let global: any;

const jsomNode = new JsomNode({
    config: {
        configPath: './config/integration/private.2013.json'
    }
});

jsomNode.wizard().then(() => {

    let ctx = SP.ClientContext.get_current();
    // let ctx = new SP.ClientContext(`/d/gexpo/pnp`);

    let oWeb = ctx.get_web();
    let oLists = oWeb.get_lists();

    ctx.load(oWeb);
    ctx.load(oLists);

    ctx.executeQueryAsync(() => {
        console.log(oWeb.get_title());
        console.log(oLists.get_data().map(list => list.get_title()));
    }, (sender, args) => {
        console.log(`Error: ${args.get_message()}`);
        console.log(args.get_stackTrace());
    });

});
