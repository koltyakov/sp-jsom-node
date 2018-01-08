import { JsomNode, IJsomNodeSettings } from 'sp-jsom-node';

const jsom = new JsomNode({
  modules: ['taxonomy', 'userprofiles']
} as IJsomNodeSettings);

jsom.wizard().then(async settings => {

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

  await ctx.executeQueryPromise();

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
    let manager = peopleManager.getUserProfilePropertyFor(user.get_loginName(), 'Manager') as any;
    return { user, manager };
  });

  await ctx.executeQueryPromise();

  console.log(`\n=== Users (on site): ===\n`);
  console.log(
    usersData
      .filter(u => u.user.get_principalType() === 1) // Users
      .filter(u => u.user.get_email() !== '')
      .map(u => {
        let manager = u.manager.get_value();
        let managerRes = usersData.filter(m => {
          return m.user.get_loginName() === manager;
        });
        return u.manager.get_value() ?
          `- ${u.user.get_title()}'s manager is ${
            managerRes.length > 0 ? managerRes[0].user.get_title() : manager
          }` :
          `- ${u.user.get_title()} is a free man!`;
      }).join('\n')
  );

}).catch(console.log);
