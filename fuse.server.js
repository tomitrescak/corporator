const { FuseBox } = require('fuse-box');

const serverFuse = FuseBox.init({
  homeDir: 'src',
  output: 'dist/$name.js',
  alias: {
    data: '~/data/',
    tests: '~/tests/',
    server: '~/server/',
    shared: '~/shared/'
  },
  sourceMaps: { inline: false, vendor: false }
  // tsConfig: startServer ? 'tsconfig.json' : 'tsconfig.server.json'
});

serverFuse
  .bundle('server')
  .target('server@es2017')
  .instructions(' > [server/index.ts]')
  .watch('(server|data)/**') // watch only server related code.. bugs up atm
  .cache(true)
  // .completed(proc => {
  //   console.log('STARTING SERVER ...');
  //   proc.start();
  // });
  .completed(proc => {
    proc.require({
      close: ({ FuseBox }) => FuseBox.import(FuseBox.mainFile).shutdown()
    });
  });

serverFuse.run();
