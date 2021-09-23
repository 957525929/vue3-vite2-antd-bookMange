import $http from "./index.js";

//mock测试
export const getTest = () => $http.get("/api/test");

//登录
export const login = (params) => $http.post("/cms/user/login", params);

//查询自己信息
export const getInfo = () => $http.get("/cms/user/information");

//查询所有日志
export const getLog = () => $http.get("cms/log");

//拼接数据
const getParams = (v) => {
  let res = "";
  for (let i in v) {
    res = res + "&" + i + "=" + v[i];
  }
  res = "?" + res.slice(1);
  return res;
};
//日志搜索
export const searchLog = (params) => {
  let url = getParams(params);
  return $http.get("cms/log/search" + url);
};
//新增书籍
export const addBook = (params)=>$http.post("
/v1/book")
