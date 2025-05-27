
export default {
  basePath: 'https://YOUR_USERNAME.github.io/gl-portfolio',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
