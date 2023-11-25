export enum Environment {
  Development = "development",
  Production = "production",
}

interface apiConfig {
  apiURL: string;
}

interface appConfig {
  [Environment.Development]: Readonly<apiConfig>;
  [Environment.Production]: Readonly<apiConfig>;
}

const config: appConfig = {
  [Environment.Development]: {
    apiURL: "http://localhost:8000/api",
  },
  [Environment.Production]: {
    apiURL: "https://production-gateway.snorkell.ai/api",
  },
};

export default config;
