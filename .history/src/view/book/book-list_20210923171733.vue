<template>
  <div>
    <a-card>
      <div>
        <div>图书列表</div>
        <div><a-button>Default</a-button></div>
      </div>
    </a-card>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
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

<style lang="less" scoped></style>
