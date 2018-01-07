import { initEnvironment as init } from './utils/init';
import { executeQueryPromise } from './utils/jsom';

init().then(async settings => {

  const clientContext: SP.ClientContext = SP.ClientContext.get_current();
  let oWeb: SP.Web = clientContext.get_web();
  let oLists: SP.ListCollection = oWeb.get_lists();

  clientContext.load(oLists, 'Include(Id,Title)');

  // await executeQueryPromise(clientContext);
  await clientContext.executeQueryPromise(); // Using JSOM extention

  let listsDataArr = oLists.get_data();
  let listsTitlesArr = listsDataArr.map(l => l.get_title());
  console.log('Lists', listsTitlesArr);

  // Just an items from a random list
  let oItems: SP.ListItemCollection = (oLists.getByTitle('TestList') as any).getItems('');

  clientContext.load(oItems, 'Include(Title)');

  // await executeQueryPromise(clientContext);
  await clientContext.executeQueryPromise();

  console.log(oItems.get_data().map(i => i.get_fieldValues()['Title']));

}).catch(console.log);
