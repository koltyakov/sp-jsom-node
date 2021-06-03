import { initEnvironment as init } from './utils/init';

init().then(async () => {

  const clientContext = SP.ClientContext.get_current();
  const oWeb = clientContext.get_web();
  const reginalSettings = oWeb.get_regionalSettings();

  const untypedRS = reginalSettings as any; // @types/sharepoint has gaps

  untypedRS.set_localeId(1033);
  untypedRS.update();

  await clientContext.executeQueryPromise();

}).catch(console.log);
