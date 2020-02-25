import { Environments } from '../test/configs';
import { downloadJsomScripts } from './utils/download';

downloadJsomScripts(Environments).catch(console.log);
