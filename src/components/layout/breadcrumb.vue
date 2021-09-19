<template>
  <div class="bread">
    <a-breadcrumb style="margin-left: 20px; font-size: 16px">
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item>Application Center</a-breadcrumb-item>
      <a-breadcrumb-item>Application List</a-breadcrumb-item>
      <a-breadcrumb-item>An Application</a-breadcrumb-item>
    </a-breadcrumb>
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

<style lang="less" scoped>
.bread {
  height: 100%;
  width: 100%;
  background: #eef4f9;
  display: flex;
  align-items: center;
}
</style>
