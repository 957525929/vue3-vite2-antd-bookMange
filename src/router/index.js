import { createRouter, createWebHashHistory } from "vue-router";

//获得token
import { getToken } from "@/util/token";

import routes from "./route.js";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === "/login") return next();
  const tokenstr = getToken("access_token");
  if (!tokenstr) return next("/login");
  next();
});

export default router;
