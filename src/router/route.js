import { homeRouter } from "./get-routes.js";

const routes = [
  {
    path: "/home",
    name: "home",
    redirect: "/dashboard",
    component: () => import("@/view/home/index.vue"),
    children: [...homeRouter],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/view/login/index.vue"),
  },
  {
    path: "/",
    redirect: "/login",
  },
];

export default routes;
