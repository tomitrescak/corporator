module.exports = function() {
  return {
    files: [
      'tsconfig.json',
      'jest.setup.js',
      'test/*.js',
      'src/**/*.+(js|jsx|ts|tsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg|graphql)',
      '!src/**/tests/*.ts?(x)'
    ],

    tests: ['src/**/tests/*.ts?(x)'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest'
  };
};
