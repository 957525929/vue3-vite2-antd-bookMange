<template>
  <div>
    <a-layout>
      <a-layout-sider
        :style="{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }"
      >
        <Sider />
      </a-layout-sider>
      <a-layout :style="{ marginLeft: '200px' }">
        <a-layout-header
          style="padding: 0"
          :style="{ position: 'fixed', zIndex: 1, width: '100%' }"
        >
          <Breadcrumb />
        </a-layout-header>
        <a-layout-content :style="{ marginTop: '64px', width: '100%' }">
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
    height: 100%;
    width: 100%;
  }
}
</style>
