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
      <a-menu-item key="1">Option 1</a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>Navigation One</template>
        <a-menu-item key="1-1">Option 1-1</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>Navigation Two</template>
        <a-menu-item key="2">Option 2-1</a-menu-item>
        <a-sub-menu key="sub2-1" title="Submenu">
          <a-menu-item key="2-1">Option 2-1-1</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #title>Navigation Three</template>
        <a-menu-item key="3">Option 3-1</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "vue";

export default {
  setup() {
    const state = reactive({
      rootSubmenuKeys: ["sub1", "sub2", "sub3"],
      openKeys: [],
      selectedKeys: ["1"],
    });

    const handleClick = (e) => {
      console.log("click", e);
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
      value,
      onSearch,
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
