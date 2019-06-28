import { IJsomModule } from './IJsomNode';

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
  search: [
    'sp.search.debug.js',
    'search.clientcontrols.debug.js'
  ],
  taxonomy: [
    'sp.taxonomy.debug.js'
  ],
  userprofiles: [
    'sp.userprofiles.debug.js'
  ],
  publishing: [
    'sp.publishing.debug.js'
  ],
  policy: [
    'sp.policy.debug.js'
  ],
  documentmanagement: [
    'sp.documentmanagement.debug.js'
  ],
  workmanagement: [
    'sp.workmanagement.debug.js'
  ],
  project: [
    'PS.debug.js'
  ]
};
