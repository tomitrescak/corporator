module.exports = function (wallaby) {
  return {
    files: [
      'tsconfig.json',
      { pattern: 'src/**/*test.ts*', ignore: true },
      'src/**/*.ts*',
      // '!src/**/*test.ts*',
      
      'jest.config.js',
      'jest.setup.js',
      'test/*.*'
    ],

    tests: ['src/server/**/*test.ts*'],
    // workers: {
    //   initial: 1,
    //   regular: 1
    // },
    env: {
      type: 'node'
    },
    testFramework: 'jest'
  };
};