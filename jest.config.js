module.exports = {
  verbose: true,
  testRegex: "/_tests_/.*.test.jsx?$",
  moduleFileExtensions: ['js'],
  moduleDirectories: ['node_modules'],
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  testPathIgnorePatterns: ['/node_modules/']
};
