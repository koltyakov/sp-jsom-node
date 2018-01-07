import { initEnvironment as init } from './utils/init';

declare const PS: any;

const config = {
  config: {
    configPath: './config/private.project-online.json'
  },
  modules: ['core', 'project']
};

init(config).then(async settings => {

  const projContext = PS.ProjectContext.get_current();
  let projects = projContext.get_projects();
  projContext.load(projects, 'Include(Name, Id)');
  projContext.executeQueryAsync(() => {
    console.log(projects.get_data().map(p => p.get_name()));
  }, (...args) => {
    console.log(args[1].get_message());
  });

}).catch(console.log);
