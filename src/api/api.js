import $http from "./index.js";

//mock测试
export const getTest = () => $http.get("/api/test");

//登录
export const login = (params) => $http.post("/cms/user/login", params);

//查询自己信息
export const getInfo = () => $http.get("/cms/user/information");

//查询所有日志
export const getLog = () => $http.get("cms/log");

//日志搜索
export const searchLog = (params) =>
  $http.get(
    "cms/log/search?count=10&page=" +
      params.logPage +
      "&name=" +
      params.name +
      "&keyword=" +
      params.keyword +
      "&start=" +
      params.startDate +
      "&end=" +
      params.endDate
  );
