<template>
  <div>
    <a-card>添加图书</a-card>
    <a-card>
      <a-form ref="formRef" :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="书名">
          <a-input v-model:value="title" placeholder="请填写书名" />
        </a-form-item>
        <a-form-item label="作者">
          <a-input v-model:value="author" placeholder="请填写作者" />
        </a-form-item>
        <a-form-item label="封面">
          <a-input v-model:value="image" placeholder="请填写封面" />
        </a-form-item>
        <a-form-item label="简介">
          <a-textarea v-model:value="summary" placeholder="请填写书名" :rows="5" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onSubmit">保存</a-button>
          <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
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
      title: "",
      author: "",
      image: "",
      summary: "",
    });
    const resetForm = () => {
      formRef.value.resetFields();
    };
    return {
      ...toRefs(formState),
      labelCol: {
        span: 2,
      },
      wrapperCol: {
        span: 14,
      },
      resetForm,
    };
  },
};
</script>

<style lang="less" scoped></style>
