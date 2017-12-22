import { initEnvironment as init } from './utils/init';
import { executeQueryPromise } from './utils/jsom';

init().then(async settings => {

  const clientContext: SP.ClientContext = SP.ClientContext.get_current();
  let oWeb: SP.Web = clientContext.get_web();
  let oLists: SP.ListCollection = oWeb.get_lists();

  clientContext.load(oLists, 'Include(Title)');

  await executeQueryPromise(clientContext);

  let listsTitlesArr = oLists.get_data().map(l => l.get_title());
  console.log(listsTitlesArr);

}).catch(console.log);
