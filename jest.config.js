const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  globalSetup: "jest-preset-angular/global-setup",
  modulePaths: ["<rootDir>"],
  collectCoverage: true,
  coverageReporters: ["html", "lcovonly", "text-summary"],
  coverageDirectory: "coverage/pay",
  coveragePathIgnorePatterns: ["/node_modules/", "/mocks/", "/mock"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: "<rootDir>/",
  }),
};

