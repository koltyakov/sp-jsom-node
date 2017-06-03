import { JsomNode } from 'sp-jsom-node';

(new JsomNode({
    modules: [ 'core', 'taxonomy', 'userprofiles', 'publishing', 'policy' ]
})).wizard().then((settings) => {



    const errCallback = (sender, args) => {
        console.log(args.get_message());
    };

    const ctx = SP.ClientContext.get_current();
    const oWeb = ctx.get_web();
    const peopleManager = new SP.UserProfiles.PeopleManager(ctx);

    let oUsers = oWeb.get_siteUsers();

    ctx.load(oWeb);
    ctx.load(oUsers);

    ctx.executeQueryAsync(() => {

        console.log(oWeb.get_title());

        let usersData = oUsers.get_data().map(user => {
            let manager = <any>peopleManager.getUserProfilePropertyFor(user.get_loginName(), 'Manager');
            return { user, manager };
        });
        ctx.executeQueryAsync(() => {
            console.log(
                usersData
                    .filter(u => u.user.get_principalType() === 1) // Users
                    .map(u => {
                        return u.manager.get_value() ?
                            `${u.user.get_title()}'s manager is ${
                                usersData.filter(m => m.user.get_loginName() === u.manager.get_value())
                                    [0].user.get_title()
                            }` :
                            `${u.user.get_title()} is a free man!`;
                    }).join('\n')
            );
        }, errCallback);

    }, errCallback);



}).catch(console.log);
