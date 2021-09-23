<template>
  <div>
    <a-card>{{ id ? "修改图书" : "添加图书" }}</a-card>
    <a-card>
      <a-form
        ref="formRef"
        :model="formState"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-item label="书名" name="title">
          <a-input v-model:value="title" placeholder="请填写书名" />
        </a-form-item>
        <a-form-item label="作者" name="author">
          <a-input v-model:value="author" placeholder="请填写作者" />
        </a-form-item>
        <a-form-item label="封面" name="image">
          <a-input v-model:value="image" placeholder="请填写封面" />
        </a-form-item>
        <a-form-item label="简介" name="summary">
          <a-textarea
            v-model:value="summary"
            placeholder="请填写书名"
            :rows="5"
          />
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
import { reactive, toRefs, ref, onMounted, watch } from "vue";
import { message } from "ant-design-vue";
import { useRoute } from "vue-router";
//api
import { updateBookList, getDetailList } from "@/api/api.js";
export default {
  setup() {
    let route = useRoute();
    let id = route.query.id;
    const formRef = ref(null);
    const formState = reactive({
      title: "",
      author: "",
      image: "",
      summary: "",
    });
    const onSubmit = async () => {
      let res = await updateBookList(id, formState);
      console.log(res);
      message.success(res.data.message);
    };
    const resetForm = () => {
      formState.title = "";
      formState.author = "";
      formState.image = "";
      formState.summary = "";
    };
    const getDetailed = async () => {
      if (!id) {
        return false;
      }
      let res = await getDetailList(id);
      let data = res.data;
      for (let key in data) {
        //接口请求出来
        if (Object.keys(formState).includes(key)) {
          formState[key] = data[key];
        }
      }
      console.log(res.data);
    };
    onMounted(() => {
      resetForm();
      getDetailed();
    });
    return {
      ...toRefs(formState),
      labelCol: {
        span: 2,
      },
      wrapperCol: {
        span: 14,
      },
      resetForm,
      formRef,
      onSubmit,
      id,
      getDetailed,
    };
  },
};
</script>

<style lang="less" scoped></style>
