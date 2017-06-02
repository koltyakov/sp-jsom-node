import { JsomNode, IJsomNodeSettings } from '../src';

declare let global: any;

let settings: any = require('../config/integration/private.2016.json');

console.log(settings.siteUrl);

let jsom = new JsomNode({
    siteUrl: settings.siteUrl,
    authOptions: {
        ...(settings as any)
    },
    envCode: '16'
});

jsom.createRequestClient()
    .then((auth) => {

        // global.XMLHttpRequest.authcookies = auth.Cookie || auth.Authorization;
        // global.XMLHttpRequest.setRequestHeader('Authorization', auth.Cookie || auth.Authorization);

        // global.XMLHttpRequest.withCredentials = true;

        let ctx = SP.ClientContext.get_current();

        // options: {
        //     agent: keepaliveAgent     /* keep alive agent */
        // }

        ctx.add_executingWebRequest((sender, e) => {
            let headers = e.get_webRequest().get_headers();
            for (let header of Object.keys(auth)) {
                if (['Cookie', 'Authorization'].indexOf(header) !== -1) {
                    headers[header] = auth[header];
                    console.log(header, headers[header]);
                }
            }
        });

        let oWeb = ctx.get_web();
        // let oLists = oWeb.get_lists();

        ctx.load(oWeb);

        ctx.executeQueryAsync(() => {
            console.log(oWeb.get_title());
        }, (sender, args) => {
            console.log(`Error: ${args.get_message()}`);
            console.log(args.get_stackTrace());
        });

        // ctx.load(oLists);

        // ctx.executeQueryAsync(() => {
        //     console.log(oLists.get_data());
        // }, (sender, args) => {
        //     console.log(`Error: ${args.get_message()}`);
        // });

    })
    .catch(console.log);
