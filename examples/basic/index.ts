import { JsomNode } from 'sp-jsom-node';

(new JsomNode({
    modules: [ 'core', 'taxonomy', 'userprofiles', 'publishing', 'policy' ]
})).wizard().then((settings) => {



    const errCallback = (sender, args) => {
        console.log(args.get_message());
    };

    const ctx = SP.ClientContext.get_current();
    const oWeb = ctx.get_web();

    ctx.load(oWeb);

    ctx.executeQueryAsync(() => {
        console.log(oWeb);
    }, errCallback);



}).catch(console.log);
