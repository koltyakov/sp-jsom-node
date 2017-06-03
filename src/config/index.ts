import { IJsomModule } from '../interfaces';

export const lcid: string = '1033';

export const JsomModules: IJsomModule = {
    core: [
        '{{lcid}}/initstrings.debug.js',
        'init.debug.js',
        'msajaxbundle.debug.js',
        'sp.core.debug.js',
        'sp.runtime.debug.js',
        'sp.debug.js'
    ],
    taxonomy: [ 'sp.taxonomy.debug.js' ],
    userprofiles: [ 'sp.userprofiles.debug.js' ],
    publishing: [ 'sp.publishing.debug.js' ],
    policy: [ 'sp.policy.debug.js' ]
};
