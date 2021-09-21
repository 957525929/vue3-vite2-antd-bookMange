<template>
  <div class="bread">
    <a-breadcrumb style="margin-left: 25px; font-size: 14px">
      <a-breadcrumb-item v-for="(v, i) in breadcrumb" :key="i">
        {{ v }}
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, watch } from "vue";

import { useRoute } from "vue-router";

import { configRoutes } from "@/config/stage/index.js";

export default {
  setup() {
    //进入页面获取面包屑
    onMounted(() => {
      state.breadcrumb = getBread();
    });

    const state = reactive({
      routesData: configRoutes[0].children,
      breadcrumb: [],
    });

    const route = useRoute();

    //监听路由变化
    watch(route, () => {
      state.breadcrumb = getBread();
    });

    //获得面包屑数据
    const getBread = () => {
      var routesKey = route.matched[1].meta.key;
      var routesData = state.routesData;
      let res = getParent(routesData, routesKey);
      return res;
    };

    //根据子节点获取父子节点路径
    const getParent = (data, key) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].meta.key === key) {
          let res = [];
          res.push(data[i].meta.title);
          return res;
        }
        if (data[i].children) {
          let node = getParent(data[i].children, key);
          if (node !== undefined) {
            let res = [];
            res.push(data[i].meta.title, ...node);
            return res;
          }
        }
      }
    };

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
.bread {
  height: 100%;
  width: 100%;
  background: #eef4f9;
  display: flex;
  align-items: center;
}
</style>
