import axios from "axios";

//获得token
import { getToken } from "../util/token";

const $http = axios.create({
  baseURL: "http://121.199.35.37:9000/",
  timeout: 1000,
});

// 添加请求拦截器
$http.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    config.headers.Authorization = getToken("access_token");
    // config.headers.refresh_token =
    //   window.sessionStorage.getItem("refresh_token");
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
$http.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default $http;
