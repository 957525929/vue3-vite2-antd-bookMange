import { createRouter, createWebHashHistory } from "vue-router";

import routerTest from "../view/router-test.vue";

const routes = [{ path: "/", component: routerTest }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
