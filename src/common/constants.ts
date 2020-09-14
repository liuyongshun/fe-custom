import { EnvData, StringObj } from './types';

const ENV = 'dev';
const envConfig: EnvData = {
  dev: {
    baseUrl: 'http://localhost:3433',
    otherUrl: 'https://...'
  },
  test: {
    baseUrl: 'https://...',
    otherUrl: 'https://...'
  },
  pre: {
    baseUrl: 'https://...',
    otherUrl: 'https://...'
  },
  prod: {
    baseUrl: 'https://...',
    otherUrl: 'https://...'
  }
};

const currEnvConfig: StringObj = envConfig[ENV] || envConfig.dev;
export default currEnvConfig;
