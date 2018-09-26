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
    testFramework: 'jest'
  };
};
