import { createRouter, createWebHashHistory } from "vue-router";

//获得token
import { getToken } from "@/util/token";

// import routerTest from "../view/router-test.vue";
import login from "@/view/login/index.vue";
import home from "@/view/home/index.vue";

const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/home",
    component: home,
  },
];

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
