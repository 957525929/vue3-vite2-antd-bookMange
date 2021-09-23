<template>
  <div>
    <a-card>
      <div class="Title">
        <div>图书列表</div>
        <a-button>导出</a-button>
      </div>
      <div class="Content">
        <div class="Table">
          <a-table
            class="ant-table-striped"
            :pagination="false"
            size="middle"
            :columns="columns"
            :data-source="data"
            :rowClassName="
              (record, index) => (index % 2 === 1 ? 'table-striped' : null)
            "
          >
            <template #action="{ record }">
              <a-button class="Edit" size="small" @click="edit(record)"
                >编辑</a-button
              >
              &emsp;
              <a-button danger size="small" @click="deleteBooks(record)"
                >删除</a-button
              >
            </template>
          </a-table>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
//api
import { getBookList, deleteBook } from "@/api/api.js";
export default {
  setup() {
    let router = useRouter();
    const state = reactive({
      data: "",
      id: "edit",
    });
    const columns = [
      {
        title: "书名",
        dataIndex: "title",
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
    };
    const edit = (record) => {
      router.push({ name: "book-detail", query: { id: record.id } });
    };
    const deleteBooks = async (record) => {
      let res = await deleteBook(record.id);
      message.success(res.data.message);
      getList();
    };
    onMounted(() => {
      getList();
    });

    return {
      ...toRefs(state),
      columns,
      getList,
      edit,
      deleteBooks,
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
.Content {
  display: flex;
  justify-content: center;
  .Table {
    width: 95%;
  }
}
.Edit {
  border: 1px solid #3963bc;
  color: #3963bc;
}
.ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}
.ant-table-striped {
  border: 1px solid #f0f0f0;
}
</style>
