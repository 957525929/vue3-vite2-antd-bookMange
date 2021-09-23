<template>
  <div>
    <a-card>
      <div class="Title">
        <div>图书列表</div>
        <a-button>导出</a-button>
      </div>
      <a-table class="ant-table-striped" size="middle" :columns="columns" :data-source="data" />
    </a-card>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
//api
import { getBookList } from "@/api/api.js";
export default {
  setup() {
    const columns = [
      {
        title: "title",
        dataIndex: "title",
      },
      {
        title: "author",
        dataIndex: "author",
      },
      {
        title: "action",
        dataIndex: "action",
      },
    ];
    onMounted(() => {
      getList();
    });
    getList = async () => {
      let res = await getBookList();
    };
    return {
      columns,
      getBookList,
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
