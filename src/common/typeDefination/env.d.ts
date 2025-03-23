declare namespace NodeJS {
  interface ProcessEnv {
    // application
    PORT: number

    DB_HOST: string;
    DB_PORT: number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_NAME: string;
  }
}
