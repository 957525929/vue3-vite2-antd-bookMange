<template>
  <div>
    <a-card>
      <div class="Title">
        <div>图书列表</div>
        <a-button>导出</a-button>
      </div>
      <a-table class="ant-table-striped" size="middle" :columns="columns" :data-source="data" :rowClassName="(record, index) => (index % 2 === 1 ? 'table-striped' : null)">
        <template #action>
          <a-button class="edit" size="small">编辑</a-button>
          &emsp;
          <a-button danger size="small">删除</a-button>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
//api
import { getBookList } from "@/api/api.js";
export default {
  setup() {
    const state = reactive({
      data: "",
    });
    const columns = [
      {
        title: "书名",
        dataIndex: "title",
        w
      },
      {
        title: "作者",
        dataIndex: "author",
      },
      {
        title: "操作",
        dataIndex: "action",
        slots: {
          customRender: "action",
        },
      },
    ];
    const getList = async () => {
      let res = await getBookList();
      state.data = res.data;
      console.log(res);
    };
    onMounted(() => {
      getList();
    });

    return {
      ...toRefs(state),
      columns,
      getList,
    };
  },
};
</script>

<style lang="less" scoped>
.Title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  // align-items: center;
}
.edit {
  border: 1px solid #3963bc;
  color: #3963bc;
}
.ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}
</style>
