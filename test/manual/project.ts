import { initEnvironment as init } from './utils/init';

declare const PS: any;

init({ modules: ['core', 'project'] }).then(async settings => {

  console.log(PS);

}).catch(console.log);
