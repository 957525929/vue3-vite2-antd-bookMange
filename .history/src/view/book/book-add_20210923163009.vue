<template>
  <div>
    <a-card>添加图书</a-card>
    <a-card>
      <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="Activity name">
          <a-input v-model:value="formState.name" />
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
      name: "",
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="lesss" scoped></style>
