import { configRoutes } from "@/config/stage/index.js";

//获取路由
let child = [];
const getRoutes = (config) => {
  config.forEach((v) => {
    if (v.children) {
      getRoutes(v.children);
    } else {
      child.push(v);
    }
  });
  return child;
};

export const homeRouter = getRoutes(configRoutes);
