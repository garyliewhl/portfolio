
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://YOUR_USERNAME.github.io/gl-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/gl-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/gl-portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/gl-portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/gl-portfolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/gl-portfolio",
    "route": "/gl-portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1437, hash: 'a0fca8a7d6605ff7035183027dc88cfd880ec6e71b38a75c3c95ebd0948abab9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1489, hash: 'bfc28e8cec5c38122ee5fd3d82c3963f0f090bfa359f8ab79c82a972c380002e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 28679, hash: 'e8ee47f24e0cc3bf9064879ebfc862e54e1086f1fd9863c1066ad8911b19c77f', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 28679, hash: 'e8ee47f24e0cc3bf9064879ebfc862e54e1086f1fd9863c1066ad8911b19c77f', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 28679, hash: 'e8ee47f24e0cc3bf9064879ebfc862e54e1086f1fd9863c1066ad8911b19c77f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28679, hash: 'e8ee47f24e0cc3bf9064879ebfc862e54e1086f1fd9863c1066ad8911b19c77f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BYXHMEDM.css': {size: 2763, hash: 'TcYQGDFLips', text: () => import('./assets-chunks/styles-BYXHMEDM_css.mjs').then(m => m.default)}
  },
};
