import axios from 'axios';

import config from './config';

const environment = process.env.NODE_ENV || 'local';

if (!(environment in config)) {
  throw new Error(`Invalid environment "${environment}"`);
}

const apiUrl = config[environment]?.apiUrl;

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

export default axiosInstance;
