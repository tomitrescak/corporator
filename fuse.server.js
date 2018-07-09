const { FuseBox } = require('fuse-box');

const serverFuse = FuseBox.init({
  homeDir: 'src',
  output: 'dist/$name.js',
  sourceMaps: { project: false, vendor: false }
  // tsConfig: startServer ? 'tsconfig.json' : 'tsconfig.server.json'
});

let server = serverFuse
  .bundle('server')
  .sourceMaps(true)
  .instructions(' > [server/index.ts]');
// Execute process right after bundling is completed
// launch and restart express

server
  .watch('server/**') // watch only server related code.. bugs up atm
  .cache(true)
  .completed(proc => {
    console.log('STARTING SERVER ...');
    proc.start();
  });

serverFuse.run();
