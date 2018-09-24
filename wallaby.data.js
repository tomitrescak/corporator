module.exports = function(wallaby) {
  return {
    files: [
      'transformer.js',
      'tsconfig.json',
      'src/data/**/*.ts*',
      'jest.config.js',
      'jest.setup.js',
      'test/*.*',
      '!src/data/**/*test.ts*'
    ],
    tests: ['src/data/**/*test.ts*'],
    workers: {
      initial: 1,
      regular: 1
    },
    env: {
      type: 'node'
    },
    testFramework: 'jest'
  };
};
