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
      runner: 'node'
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
      // const fs = require('fs');
      // const path = require('path');
      // const dirs = [
      //   'moddle',
      //   'moddle/lib',
      //   'moddle-xml',
      //   'moddle-xml/lib',
      //   'bpmn-moddle',
      //   'bpmn-moddle/lib'
      // ];
      // for (let dir of dirs) {
      //   const workPath = __dirname + '/node_modules/' + dir;
      //   const files = fs.readdirSync(workPath);
      //   for (let file of files) {
      //     if (path.extname(file) === '.js') {
      //       const filePath = path.join(workPath, file);
      //       const content = fs.readFileSync(filePath, { encoding: 'utf-8' });
      //       const result = require('babel-core').transform(content, {
      //         plugins: ['transform-es2015-modules-commonjs']
      //       });
      //       console.log(result.code);
      //       // const transformed = transform(content);
      //       fs.writeFileSync(filePath, result.code, { encoding: 'utf-8' });
      //     }
      //   }
      // }
    }
  };
};
