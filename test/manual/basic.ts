import { initEnvironment as init } from './utils/init';

init().then(async settings => {

  const clientContext = SP.ClientContext.get_current();
  let oWeb = clientContext.get_web();
  let oLists = oWeb.get_lists();

  clientContext.load(oLists, 'Include(Id,Title)');

  await clientContext.executeQueryPromise(); // Using JSOM extension

  let listsDataArr = oLists.get_data();
  let listsTitlesArr = listsDataArr.map(l => l.get_title());
  console.log('Lists', listsTitlesArr);

  // Just an items from a random list
  let oItems = oLists.getByTitle('TestList').getItems(new SP.CamlQuery());

  clientContext.load(oItems, 'Include(Title)');

  await clientContext.executeQueryPromise();

  console.log(oItems.get_data().map(i => i.get_fieldValues()['Title']));

}).catch(console.log);
