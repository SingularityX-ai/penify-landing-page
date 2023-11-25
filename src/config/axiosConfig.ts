import axios from "axios";
import config, { Environment } from "./config";

// const environment = config[Environment.Development];
const environment = config[Environment.Production];

export const axiosInstance = axios.create({
  baseURL: environment.apiURL,
});
