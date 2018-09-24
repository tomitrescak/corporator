const {
  FuseBox,
  WebIndexPlugin,
  ImageBase64Plugin,
  JSONPlugin,
  CSSPlugin,
  CSSResourcePlugin
} = require('fuse-box');
const GraphQLPlugin = require('fuse-box-graphql-plugin');
const JsxControlsPugin = require('jsx-controls-loader').fuseBoxPlugin;

// const { SnapshotPlugin } = require('luis/dist/bridges/jest/snapshot_plugin');

const fuse = FuseBox.init({
  homeDir: 'src',
  target: 'browser@es6',
  output: 'dist/$name.js',
  plugins: [
    WebIndexPlugin({ template: 'src/client/index.html', target: 'index.html' }),
    JsxControlsPugin,
    [CSSResourcePlugin({ inline: true }), CSSPlugin()],
    ImageBase64Plugin(),
    JSONPlugin(),
    // SnapshotPlugin(),
    ['.graphql', GraphQLPlugin()]
  ],
  alias: {
    data: '~/data/',
    client: '~/client/',
    server: '~/server/',
    shared: '~/shared/'
  },
  sourceMaps: true
});

/////////////////////

fuse.dev({
  port: 5678,
  httpServer: false
});

/////////////////////

// const historyAPIFallback = require('connect-history-api-fallback');
// fuse.dev({ port: 3000 }, server => {
//   const app = server.httpServer.app;
//   app.use(historyAPIFallback());
// });

/////////////////////

fuse
  .bundle('app')
  .instructions(' > pages/router.tsx -*.snap')
  .hmr()
  .watch();
fuse.run();
