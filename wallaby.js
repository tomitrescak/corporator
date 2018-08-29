module.exports = function(wallaby) {
  return {
    files: [
      'tsconfig.json',
      'transformer.js',
      'jest.setup.js',
      'jest.config.js',
      //'jest.*',
      'test/*.js',
      'src/**/*.+(js|jsx|ts|tsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg|graphql)',
      '!src/luis_app',
<<<<<<< HEAD
      'src/**/index.ts',
      '!src/server/**/*.test.ts'
=======
      // '!src/**/index.ts',
      '!src/**/*.test.ts'
>>>>>>> 44933f36a14bc497ba1da653af840b658dcadc17
    ],

    tests: ['src/server/**/*.test.ts'],

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
