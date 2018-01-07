import { initEnvironment as init } from './utils/init';

declare const PS: any;

const config = {
  config: {
    configPath: './config/private.project-online.json'
  },
  modules: ['core', 'project']
};

init(config).then(async settings => {

  const projContext = new PS.ProjectContext(settings.siteUrl);
  let projects = projContext.get_projects();
  projContext.load(projects, 'Include(Name, Id)');
  projContext.executeQueryAsync(() => {
    console.log(projects.get_data());
  }, (...args) => {
    console.log(projects.get_data().map(p => p.get_name()));
  });

}).catch(console.log);
