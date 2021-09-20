<template>
  <div style="height: 100%">
    <a-menu
      style="height: 100%; background: #192a5e; color: #c4c9d2"
      :openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      @openChange="onOpenChange"
      mode="inline"
      @click="handleClick"
    >
      <div style="padding: 20px">
        <a-input-search v-model:value="value" @search="onSearch" />
      </div>
      <div v-for="a in routesData" :key="a.meta.key">
        <!-- 1级 -->
        <a-menu-item v-if="!a.children" :key="a.meta.key">
          {{ a.meta.title }}
        </a-menu-item>
        <!-- 2级 -->
        <a-sub-menu v-if="a.children" :key="a.meta.key" :title="a.meta.title">
          <div v-for="b in a.children" :key="b.meta.key">
            <a-menu-item v-if="!b.children" :key="b.meta.key">
              {{ b.meta.title }}
            </a-menu-item>
            <!-- 3级 -->
            <a-sub-menu
              v-if="b.children"
              :key="b.meta.key"
              :title="b.meta.title"
            >
              <a-menu-item v-for="c in b.children" :key="c.meta.key">
                {{ c.meta.title }}
              </a-menu-item>
            </a-sub-menu>
          </div>
        </a-sub-menu>
      </div>
    </a-menu>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "vue";

import router from "@/router/index";

// 获取路由信息
import { configRoutes } from "@/config/stage/index.js";
import { homeRouter } from "@/router/get-routes.js";

export default {
  setup() {
    const state = reactive({
      rootSubmenuKeys: ["3", "4"],
      openKeys: [],
      selectedKeys: ["1"],
      routesData: configRoutes[0].children,
    });

    const handleClick = (e) => {
      let findKey = homeRouter.find((v) => v.meta.key === e.key);
      console.log(findKey);
      router.push(findKey.path);
    };

    const onOpenChange = (openKeys) => {
      const latestOpenKey = openKeys.find(
        (key) => state.openKeys.indexOf(key) === -1
      );

      if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        state.openKeys = openKeys;
      } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    };

    const value = ref("");

    const onSearch = (searchValue) => {
      console.log("use value", searchValue);
      console.log("or use this.value", value.value);
    };

    return {
      ...toRefs(state),
      handleClick,
      onOpenChange,
      onSearch,
      value,
    };
  },
};
</script>

<style lang="less" scoped>
::v-deep {
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: rgba(0, 0, 0, 0);
  }

  .ant-menu-sub.ant-menu-inline {
    background: #122150;
    color: #c4c9d2;
  }

  .ant-menu-submenu-expand-icon,
  .ant-menu-submenu-arrow {
    color: #c4c9d2;
  }

  .ant-menu-vertical .ant-menu-item::after,
  .ant-menu-vertical-left .ant-menu-item::after,
  .ant-menu-vertical-right .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    border-right: 0 solid #1890ff;
  }

  .ant-input-affix-wrapper {
    background: #192a5e;
    border: 0;
    border-bottom: 1px solid #c4c9d2;
  }

  .anticon svg {
    color: #c4c9d2;
  }

  .ant-input-affix-wrapper > input.ant-input {
    background: #192a5e;
    color: #c4c9d2;
  }
}
</style>
