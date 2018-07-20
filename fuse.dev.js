const { FuseBox, WebIndexPlugin, ImageBase64Plugin, JSONPlugin } = require('fuse-box');
const GraphQLPlugin = require('fuse-box-graphql-plugin');
const JsxControlsPugin = require('jsx-controls-loader').fuseBoxPlugin;

const { SnapshotPlugin } = require('luis/dist/bridges/jest/snapshot_plugin');

const fuse = FuseBox.init({
  homeDir: 'src',
  target: 'browser@es6',
  output: '.fusebox/dist/$name.js',
  plugins: [
    WebIndexPlugin({ template: 'src/client/index.html', target: 'index.html' }),
    ['.graphql', GraphQLPlugin()],
    JsxControlsPugin,
    ImageBase64Plugin(),
    JSONPlugin(),
    SnapshotPlugin()
  ],
  sourceMaps: true
});
const historyAPIFallback = require('connect-history-api-fallback');
fuse.dev({ port: 3000 }, server => {
  const app = server.httpServer.app;
  app.use(historyAPIFallback());
});
fuse
  .bundle('app')
  .instructions(' > pages/router.tsx')
  .hmr()
  .watch();
fuse.run();
