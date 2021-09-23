<template>
  <div>
    <a-card>添加图书</a-card>
    <a-card>
      <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="书名">
          <a-input v-model:value="bookName" placeholder="请填写书名" />
        </a-form-item>
        <a-form-item label="作者">
          <a-input v-model:value="author" placeholder="请填写作者" />
        </a-form-item>
        <a-form-item label="封面">
          <a-input v-model:value="bookName" placeholder="请填写书名" />
        </a-form-item>
        <a-form-item label="书名">
          <a-input v-model:value="bookName" placeholder="请填写书名" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onSubmit">Create</a-button>
          <a-button style="margin-left: 10px">Cancel</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const formState = reactive({
      bookName: "",
    });

    return {
      ...toRefs(formState),
      labelCol: {
        span: 2,
      },
      wrapperCol: {
        span: 12,
      },
    };
  },
};
</script>

<style lang="less" scoped></style>
