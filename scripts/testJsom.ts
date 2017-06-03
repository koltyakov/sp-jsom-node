import { JsomNode, IJsomNodeSettings } from '../src';

declare let global: any;

let settings: any = require('../config/integration/private.2013.json');

console.log(settings.siteUrl);

let jsom = new JsomNode({
    siteUrl: settings.siteUrl,
    authOptions: {
        ...(settings as any)
    },
    envCode: '15'
});

jsom.createRequestClient()
    .then((context) => {

        let ctx = SP.ClientContext.get_current();

        // ctx.get_webRequestExecutorFactory
        // ctx.add_executingWebRequest((sender, e) => {
        //     let headers = e.get_webRequest().get_headers();
        //     for (let header of Object.keys(context.headers)) {
        //         if (['Cookie', 'Authorization'].indexOf(header) !== -1) {
        //             headers[header] = context.headers[header];
        //             // headers['X-RequestDigest'] = context.digest;
        //             // console.log(headers);
        //         }
        //     }
        //     console.log(e.get_webRequest().get_url());
        // });

        let oWeb = ctx.get_web();
        let oLists = oWeb.get_lists();

        ctx.load(oWeb);
        ctx.load(oLists);

        ctx.executeQueryAsync(() => {
            console.log(oWeb.get_title());
            console.log(oLists.get_data().length);
        }, (sender, args) => {
            console.log(`Error: ${args.get_message()}`);
            console.log(args.get_stackTrace());
        });


    })
    .catch(console.log);
