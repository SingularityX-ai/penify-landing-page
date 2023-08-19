interface Config {
  [key: string]: { apiUrl: string };
}

const config: Config = {
  local: {
    apiUrl: 'http://localhost:3000/api',
  },
  development: {
    apiUrl: 'http://localhost:3000/api',
  },
  production: {
    apiUrl: 'https://production-gateway.snorkell.ai/api',
  },
};

export default config;
