interface Process {
  env: {
    APP_ENV: string;
  };
}
export declare let process: Process;

export interface EnvData {
  [index: string]: {
    baseUrl: string;
    otherUrl: string;
  };
}

export interface CodeMessage {
  [key: number]: string;
}