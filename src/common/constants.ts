import { process, EnvData, StringObj } from './types';

const ENV: string = process.env.APP_ENV;
const envConfig: EnvData = {
  dev: {
    baseUrl: 'https://...',
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
