module.exports = function(wallaby) {
  return {
    files: [
      'tsconfig.json',
      'transformer.js',
      'jest.setup.js',
      'jest.config.js',
      'test/*.js',
      'src/**/*.+(js|jsx|ts|tsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg|graphql)',
      '!src/luis_app',
      '!src/**/*.test.+(ts|tsx)'
    ],

    tests: [
      //'src/client/modules/form/**/checkbox_view.test.+(ts|tsx)',
      'src/data/**/*.test.+(ts|tsx)',
      'src/client/**/*.test.+(ts|tsx)',
      'src/shared/**/*.test.+(ts|tsx)'
    ],

    env: {
      type: 'node',
      runner: 'node',
      params: {
        NODE_ENV: 'test',
        ENDPOINT: 'http://localhost:4466/test'
      }
    },
    workers: {
      initial: 1,
      regular: 1
    },
    preprocessors: {
      'src/**/*.tsx': file => require('jsx-controls-loader').loader(file.content)
    },
    testFramework: 'jest',
    setup() {
      const path = require('path');
      const moduleAlias = require('module-alias');
      moduleAlias.addAlias('client', path.dirname(require.resolve('./src/client')));
      moduleAlias.addAlias('server', path.dirname(require.resolve('./src/server')));
      moduleAlias.addAlias('data', path.dirname(require.resolve('./src/data')));

      process.env.ENDPOINT = 'http://localhost:4466/test';

      const { server } = require('./src/server/prisma');
      return server
        .start({
          port: 4000,
          endpoint: '/'
        })
        .then(server => {
          wallaby.app = server;
          console.log('SERVER STARTED');
        });
    },
    teardown(wallaby) {
      if (wallaby.app) {
        console.log('TEARING DOWN');
        return wallaby.app.close();
      } else {
        console.log('NOTHNG TO TEAR DOWN');
      }
    }
  };
};
