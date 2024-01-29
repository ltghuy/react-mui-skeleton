import { pathsToModuleNameMapper } from 'ts-jest';

import tsConfig from './tsconfig.json' assert { type: 'json' };

export default {
  rootDir: './',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleDirectories: ['node_modules', './src'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(tsConfig.compilerOptions.paths, {
      prefix: '<rootDir>/',
    }),
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(css|scss)$': 'jest-css-modules-transform',
  },
  //Customize
  testPathIgnorePatterns: [
    '<rootDir>/.storybook/',
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
  ],
  testMatch: [
    '**/components/core/**/*.test.{js,jsx,ts,tsx}',
    '**/utils/**/*.test.{js,jsx,ts,tsx}',
  ],
  coverageReporters: ['text', 'html'],
  collectCoverageFrom: [
    '**/components/core/**/*.{js,jsx,ts,tsx}',
    '**/utils/**/*.{js,jsx,ts,tsx}',
    '!**/components/core/**/*.stories.{js,jsx,ts,tsx}',
    '!**/components/core/**/theme.{js,jsx,ts,tsx}',
    '!**/components/core/**/mock.{js,jsx,ts,tsx}',
    '!**/components/core/index.ts',
    '!**/utils/**/*.stories.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
    '!<rootDir>/path/to/dir/',
  ],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
};
