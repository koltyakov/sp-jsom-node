import { initEnvironment as init } from './utils/init';

const config = {
  modules: [ 'search' ]
};

init(config).then(async () => {

  const clientContext = SP.ClientContext.get_current();

  const keywordQuery = new Microsoft.SharePoint.Client.Search.Query.KeywordQuery(clientContext);
  keywordQuery.set_trimDuplicates(false);
  keywordQuery.set_rowLimit(5);
  keywordQuery.set_queryText('*');
  const searchExecutor = new Microsoft.SharePoint.Client.Search.Query.SearchExecutor(clientContext);
  const results = searchExecutor.executeQuery(keywordQuery);

  await clientContext.executeQueryPromise(); // Using JSOM extension

  console.log(results.get_value().ResultTables);

}).catch(console.log);
