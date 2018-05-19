module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '\\.(gql|graphql)$': 'jest-transform-graphql'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  // "setupTestFrameworkScriptFile": "<rootDir>/jest.run.js",
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^.*[.](css|CSS)$': '<rootDir>/test/styleMock.js',
    '^.*[.](jpg|gif|ttf|eot|svg)$': '<rootDir>/test/fileMock.js'
  }
};
