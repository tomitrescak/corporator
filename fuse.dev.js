const { FuseBox, WebIndexPlugin, ImageBase64Plugin } = require('fuse-box');
const GraphQLPlugin = require('fuse-box-graphql-plugin');
const JsxControlsPugin = require('jsx-controls-loader').fuseBoxPlugin;

const fuse = FuseBox.init({
  homeDir: 'src',
  target: 'browser@es6',
  output: 'dist/$name.js',
  plugins: [
    WebIndexPlugin({ template: 'src/client/index.html', target: 'index.html' }),
    ['.graphql', GraphQLPlugin()],
    JsxControlsPugin,
    ImageBase64Plugin()
  ],
  sourceMaps: true
});
fuse.dev(); // launch http server
fuse
  .bundle('app')
  .instructions(' > client/index.tsx')
  .hmr()
  .watch();
fuse.run();
