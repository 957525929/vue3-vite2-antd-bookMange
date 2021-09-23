<template>
  <div>
    <a-card>
      <div class="Title">
        <div>图书列表</div>
        <a-button>导出</a-button>
      </div>
      <a-table class="ant-table-striped" size="middle" :columns="columns" :data-source="data" :rowClassName="(record, index) => (index % 2 === 1 ? 'table-striped' : null)" />
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

<style lang="less" scoped>
.Title {
  display: flex;
  justify-content: space-between;
  // align-items: center;
}
</style>
