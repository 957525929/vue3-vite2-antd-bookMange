<template>
  <div>
    <a-layout>
      <a-layout-sider>
        <Sider />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="padding: 0">
          <Breadcrumb />
        </a-layout-header>
        <a-layout-content>
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

import Sider from "@/components/layout/sider.vue";
import Breadcrumb from "@/components/layout/breadcrumb.vue";

export default {
  components: {
    Sider,
    Breadcrumb,
  },
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
::v-deep {
  .ant-layout {
    height: 100vh;
    width: 100vw;
  }
}
</style>
