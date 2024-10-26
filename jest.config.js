export default {
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  testMatch: ["**/tests/**/*.test.js", "**/?(*.)+(spec|test).js"],
  testPathIgnorePatterns: ["/node_modules/"],
  testEnvironment: "node",
};
