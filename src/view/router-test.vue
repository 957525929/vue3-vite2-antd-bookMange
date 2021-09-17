<template>
  <!-- 测试路由 -->
  <div>
    {{ routerTest }}
    <!-- vuex持久化测试 -->
    <div>
      vues数据持久化：
      {{ $store.state.stateTest }}
      <a-button @click="add">+</a-button>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";

//数据持久化测试
import { useStore } from "vuex";

// import { getTest } from "../api/api";
//login测试
import { login } from "../api/api";
//get测试
import { getInfo } from "../api/api";

//token
import { saveToken } from "../util/token";

export default {
  setup() {
    onMounted(() => {
      getData();
      goLogin();
    });

    const state = reactive({
      routerTest: "routerTest",
      testData: "",
    });

    const store = useStore();
    const add = () => {
      store.dispatch("add");
    };

    // const getData = async () => {
    //   state.testData = await getTest();
    //   console.log(state.testData);
    // };
    const goLogin = async () => {
      let username = "root";
      let password = "123456";
      let loginResult = await login({ username, password });
      const { access_token, refresh_token } = loginResult.data;
      saveToken(access_token, refresh_token);
    };
    const getData = async () => {
      let data = await getInfo();
      console.log(data);
    };

    return {
      ...toRefs(state),
      add,
      // getTest,
    };
  },
};
</script>

<style lang="less" scoped></style>
