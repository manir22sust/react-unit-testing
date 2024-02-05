// jest.config.js
module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  /*   coveragePathIgnorePatterns: ["src/App.jsx", "src/index.js", "src/utils/"],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  }, */
};
