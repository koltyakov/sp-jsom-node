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

    const taxSession = SP.Taxonomy.TaxonomySession.getTaxonomySession(ctx);
    const termStore = taxSession.getDefaultSiteCollectionTermStore();
    const termGroups = termStore.get_groups();

    ctx.load(oWeb);
    ctx.load(oUsers);
    ctx.load(termGroups, 'Include(Name,TermSets)');

    ctx.executeQueryAsync(() => {

        console.log(`\n=== Web title: ${oWeb.get_title()} ===`);

        console.log(`\n=== Terms groups:===\n`);
        console.log(
            termGroups.get_data().map(group => {
                return `Group: ${group.get_name()}
                    ${group.get_termSets().get_data().map(termSet => {
                        return `- Termset: ${termSet.get_name()}`;
                    }).join('\n')}
                `;
            }).join('\n').split('\n').map(l => l.trim()).join('\n')
        );

        let usersData = oUsers.get_data().map(user => {
            let manager = <any>peopleManager.getUserProfilePropertyFor(user.get_loginName(), 'Manager');
            return { user, manager };
        });

        ctx.executeQueryAsync(() => {

            console.log(`\n=== Users: ===\n`);
            console.log(
                usersData
                    .filter(u => u.user.get_principalType() === 1) // Users
                    .map(u => {
                        return u.manager.get_value() ?
                            `- ${u.user.get_title()}'s manager is ${
                                usersData.filter(m => m.user.get_loginName() === u.manager.get_value())
                                    [0].user.get_title()
                            }` :
                            `- ${u.user.get_title()} is a free man!`;
                    }).join('\n')
            );

        }, errCallback);

    }, errCallback);



}).catch(console.log);
