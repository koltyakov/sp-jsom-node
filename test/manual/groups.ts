import { initEnvironment as init } from './utils/init';

init().then(async settings => {

  const clientContext = SP.ClientContext.get_current();
  let oWeb = clientContext.get_web();
  let oGroups = oWeb.get_siteGroups();

  clientContext.load(oGroups, 'Include(Id,Title,Users)');

  await clientContext.executeQueryPromise();

  let users = oGroups.get_data().map(group => {
    return {
      group: group.get_title(),
      users: group.get_users().get_data().map(user => {
        return {
          id: user.get_id(),
          title: user.get_title()
        };
      })
    };
  });

}).catch(console.log);
