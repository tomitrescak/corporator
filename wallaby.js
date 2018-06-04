module.exports = function(wallaby) {
  return {
    files: [
      'tsconfig.json',
      'transformer.js',
      'jest.*',
      'test/*.js',
      'src/**/*.+(js|jsx|ts|tsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg|graphql)',
      '!src/**/tests/*.+(ts|tsx)',
      '!src/luis_app',
      '!src/**/index.ts'
    ],

    tests: ['!src/**/tests/index.ts', 'src/**/tests/*.+(ts|tsx)'],

    env: {
      type: 'node',
      runner: 'node'
    },
    workers: {
      initial: 1,
      regular: 1
    },
    preprocessors: {
      '**/*.tsx': file => require('jsx-controls-loader').loader(file.content)
    },
    testFramework: 'jest'
  };
};
