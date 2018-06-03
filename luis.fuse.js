const { FuseBox, WebIndexPlugin, ImageBase64Plugin, JSONPlugin } = require('fuse-box');
const JsxControlsPugin = require('jsx-controls-loader').fuseBoxPlugin;

const { SnapshotPlugin } = require('luis/dist/bridges/jest/snapshot_plugin');
const GraphQLPlugin = require('fuse-box-graphql-plugin');

const fuse = FuseBox.init({
  homeDir: '../../src',
  target: 'browser@es6',
  output: 'luis/$name.js',
  alias: {
    client: '~/client/',
    server: '~/server/',
    shared: '~/shared/'
  },
  plugins: [
    WebIndexPlugin({ template: 'index.html', target: 'index.html' }),
    JsxControlsPugin,
    ImageBase64Plugin(),
    JSONPlugin(),
    SnapshotPlugin(),
    GraphQLPlugin()
  ],
  sourceMaps: true
});
const historyAPIFallback = require('connect-history-api-fallback');

fuse.dev({ port: 9001 }, server => {
  const app = server.httpServer.app;
  app.use(historyAPIFallback());
});

fuse
  .bundle('vendor')
  // Watching (to add dependencies) it's damn fast anyway
  // first bundle will get HMR related code injected
  .instructions(` ~ luis_app.ts`); // nothing has changed here

fuse
  .bundle('app')
  .instructions(` !> [luis_app.ts]`)
  .hmr()
  .watch();
fuse.run();
