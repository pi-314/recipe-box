//import playwright from 'eslint-plugin-playwright'

const baseConfig = require("../eslint.config.js");
const playwright = require('eslint-plugin-playwright');

module.exports = [
  ...baseConfig,
  {
    ...playwright.configs['flat/recommended'],
    files: ['src/**'],
  },
  {
    files: ['src/**'],
    rules: {
      // Overwrite or add Playwright rules here
      // ...
    },
  },
];
