module.exports = function() {
  return {
    files: [
      'tsconfig.json',
      'jest.*',
      'test/*.js',
      'src/**/*.+(js|jsx|ts|tsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg|graphql)',
      '!src/luis_app',
      '!src/**/index.ts'
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
    // preprocessors: {
    //   '**/*.js': file =>
    //     require('babel-core').transform(file.content, {
    //       sourceMap: true,
    //       presets: ['es2015'],
    //       plugins: ['transform-object-rest-spread']
    //     })
    // },
    testFramework: 'jest'
  };
};
