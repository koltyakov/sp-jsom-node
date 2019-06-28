import { initEnvironment as init } from './utils/init';

declare const PS: any;

const config = {
  config: { configPath: './config/private.project-online.json' },
  modules: [ 'project' ]
};

init(config).then(async () => {

  // API Reference - https://msdn.microsoft.com/en-us/library/office/jj669820.aspx
  const projCtx = PS.ProjectContext.get_current();
  let projects = projCtx.get_projects();
  projCtx.load(projects, 'Include(Name, Id)');
  await projCtx.executeQueryPromise();

  console.log(projects.get_data().map((p) => p.get_name()));

}).catch(console.log);
