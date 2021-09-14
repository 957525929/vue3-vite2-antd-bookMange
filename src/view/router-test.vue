<template>
  <!-- 测试路由 -->
  <div>
    {{ routerTest }}
    <!-- vuex持久化测试 -->
    <div>
      vues数据持久化：
      {{ $store.state.stateTest }}
      <a-button @click="add">+</a-button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

import { useStore } from "vuex";

export default {
  setup() {
    const state = reactive({
      routerTest: "routerTest",
    });

    const store = useStore();
    const add = () => {
      store.dispatch("add");
    };

    return {
      ...toRefs(state),
      add,
    };
  },
};
</script>

<style lang="less" scoped></style>
