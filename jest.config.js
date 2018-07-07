module.exports = {
  roots: ['<rootDir>/src'],
  globals: {
    'ts-jest': {
      skipBabel: true
    }
  },
  transform: {
    '^.+\\.tsx?$': './transformer.js',
    '^.+\\.js$': 'babel-jest',
    '\\.(gql|graphql)$': 'jest-transform-graphql'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  // "setupTestFrameworkScriptFile": "<rootDir>/jest.run.js",
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // testResultsProcessor: './node_modules/luis/dist/bridges/jest/reporter',
  watchPathIgnorePatterns: ['<rootDir>/src/summary.json', '<rootDir>/src/snapshots.js'],
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^.*[.](css|CSS)$': '<rootDir>/test/styleMock.js',
    '^.*[.](jpg|gif|png|ttf|eot|svg)$': '<rootDir>/test/fileMock.js'
  },
  snapshotSerializers: ['jest-spy-serialiser'],
  updateSnapshot: true
  //transformIgnorePatterns: ['<rootDir>/node_modules/', '/!node_modules\\/bpmn-moddle']
  //transformIgnorePatterns: ['node_modules/(?!(bpmn-moddle)/)'],
};
