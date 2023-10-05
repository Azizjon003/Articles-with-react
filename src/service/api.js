import axios from "axios";
import { getItem } from "../helpers/persistanse-storage.js";

axios.defaults.baseURL = "https://api.realworld.io/api";

axios.interceptors.request.use((config) => {
  // console.log("config", config);
  const token = getItem("token");

  const authorizationToken = token ? `Token ${token}` : "";
  config.headers.Authorization = authorizationToken;
  console.log(config);
  return config;
});
export default axios;
