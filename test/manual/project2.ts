import { initEnvironment as init } from './utils/init';

declare const PS: any;

const config = {
  config: { configPath: './config/private.project-online.json' },
  modules: [ 'project' ]
};

init(config).then(async () => {

  const projContext = PS.ProjectContext.get_current();
  const lookupTables = projContext.get_lookupTables();

  const myLut = lookupTables.getByGuid('e7397277-1ab0-4096-b2dd-57029a055ba4');

  const myEntries = myLut.get_entries();

  projContext.load(myEntries);

  await projContext.executeQueryPromise();

  let newIndex = myEntries.get_count() + 1;
  const newId = SP.Guid.newGuid();
  const lutEntry = new PS.LookupEntryCreationInformation();

  const lutValue = new PS.LookupEntryValue();

  const encodedStr = 'Тест42';

  lutValue.set_textValue(encodedStr);
  lutEntry.set_description(encodedStr);

  lutEntry.set_sortIndex(newIndex); // Index of new row (previosly get it see ex. 04-getCustomRows.ts)
  lutEntry.set_id(newId);
  lutEntry.set_parentId(null);

  lutEntry.set_value(lutValue);
  myEntries.add(lutEntry);

  lookupTables.update(myEntries);

  await projContext.executeQueryPromise();

  console.log('Done');

}).catch(console.log);
