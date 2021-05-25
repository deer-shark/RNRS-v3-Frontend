import axios from "axios";

const productionBaseURL = "";
const developmentBaseURL = "";
const baseURL =
  process.env.NODE_ENV === "production"
    ? productionBaseURL
    : developmentBaseURL;

const instance = axios.create({
  baseURL,
  validateStatus(status) {
    return status >= 200 && status < 600;
  },
});

instance.interceptors.request.use(function (config) {
  return config;
});
instance.interceptors.response.use(function (response) {
  return response;
});

export default instance;
