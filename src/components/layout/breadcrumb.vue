<template>
  <div class="bread">
    <a-breadcrumb style="margin-left: 25px; font-size: 14px">
      <a-breadcrumb-item>{{ $route.meta.title }}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

import { configRoutes } from "@/config/stage/index.js";

export default {
  setup() {
    const state = reactive({
      routesData: configRoutes[0].children,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
.bread {
  height: 100%;
  width: 100%;
  background: #eef4f9;
  display: flex;
  align-items: center;
}
</style>
