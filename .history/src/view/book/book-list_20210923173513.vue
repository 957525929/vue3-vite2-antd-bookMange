<template>
  <div>
    <a-card>
      <div class="Title">
        <div>图书列表</div>
        <a-button>导出</a-button>
      </div>
      <!-- <a-table class="ant-table-striped" size="middle" :columns="columns" :data-source="state.data" /> -->
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
    const getList = async () => {
      let res = await getBookList();
      state.data = res.data
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
  // align-items: center;
}
</style>
