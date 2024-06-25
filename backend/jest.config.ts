import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
