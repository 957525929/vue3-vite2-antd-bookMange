<template>
  <div>
    <a-card>
      <div class="Title">
        <div>
          <div>日志管理</div>
        </div>
        <div class="TitleRight">
          <div>
            <a-select
              v-model:value="selectValue"
              label-in-value
              style="width: 120px"
              :options="options"
              @change="handleChange"
            >
            </a-select>
          </div>
          <div class="Margin">
            <a-input-search
              v-model:value="searchValue"
              placeholder="请输入内容"
              enter-button
              @search="onSearch"
            />
          </div>
          <div class="Margin">
            <a-range-picker
              v-model:value="dataValue"
              :placeholder="['开始时间', '结束时间']"
              :ranges="ranges"
              @change="onChange"
              show-time
            />
          </div>
        </div>
      </div>
    </a-card>

    <a-card>
      <div style="margin-top: 20px" v-for="v in logData" :key="v.id">
        <div><CaretRightOutlined style="color: blue" />{{ v.message }}</div>
        <div style="color: #baa4ae">&emsp;{{ v.username }}</div>
      </div>

      <a-divider>
        <text @click="newLog" style="color: blue">点击加载更多</text>
      </a-divider>
    </a-card>
  </div>
</template>

<script>
import { reactive, toRefs, ref, onMounted } from "vue";
import moment from "moment";
import "moment/dist/locale/zh-cn";
import { CaretRightOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";

import $http from "@/api/index.js";

//所有日志
import { getLog } from "@/api/api.js";

export default {
  components: {
    CaretRightOutlined,
  },
  setup() {
    const state = reactive({
      count: 0,
      logData: "",
      logPage: 0,
      isSearch: false,
      searchData: {
        name: null,
        keyword: null,
        startDate: null,
        endDate: null,
      },
    });

    const options = ref([
      {
        value: "all",
        label: "全部",
      },
      {
        value: "root",
        label: "root",
      },
    ]);

    //获取日志列表
    const log = async () => {
      let res = await getLog();
      state.logData = res.data.items;
    };

    //加载更多
    const newLog = async () => {
      state.logPage++;
      let res;
      if (!state.isSearch) {
        res = await $http.get("cms/log?page=" + state.logPage);
      } else {
        res = await $http.get(
          "cms/log/search?count=10&page=" +
            state.logPage +
            "&name=&keyword=" +
            searchValue.value
        );
        console.log(res);
      }
      if (res.data.items.length === 0) {
        message.warning("没有更多了");
      } else {
        for (let i in res.data.items) {
          state.logData.push(res.data.items[i]);
        }
      }
    };

    onMounted(() => {
      log();
    });

    //选择
    const handleChange = (value) => {
      state.searchData.name = value.value;
    };

    const searchValue = ref("");

    //搜索
    const onSearch = async (searchValue) => {
      state.isSearch = true;
      state.logPage = 0;
      let res = await $http.get(
        "cms/log/search?count=10&page=" +
          state.logPage +
          "&name=&keyword=" +
          searchValue +
          "&start=" +
          state.searchData.startDate +
          "&end=" +
          state.searchData.endDate
      );
      if (res.data.total === 0) {
        message.warning("没有日志信息");
      } else {
        state.logData = [];
        for (let i in res.data.items) {
          state.logData.push(res.data.items[i]);
        }
      }
    };

    //日期
    const onChange = async (value, dateString) => {
      state.isSearch = true;
      state.logPage = 0;
      state.searchData.startDate = moment(dateString[0]).format(
        "YYYY-MM-DD+HH:mm:ss"
      );
      state.searchData.endDate = moment(dateString[1]).format(
        "YYYY-MM-DD+HH:mm:ss"
      );
      let res = await $http.get(
        "cms/log/search?count=10&page=" +
          state.logPage +
          "&name=&keyword=" +
          searchValue.value +
          "&start=" +
          state.searchData.startDate +
          "&end=" +
          state.searchData.endDate
      );
      if (res.data.total === 0) {
        message.warning("没有日志信息");
      } else {
        state.logData = [];
        for (let i in res.data.items) {
          state.logData.push(res.data.items[i]);
        }
      }
    };

    return {
      ...toRefs(state),
      searchValue,
      onSearch,
      dataValue: ref([]),
      ranges: {
        今天: [moment(), moment()],
        本月: [moment().startOf("month"), moment()],
      },
      selectValue: ref({
        value: "all",
      }),
      options,
      handleChange,
      onChange,
      newLog,
    };
  },
};
</script>

<style lang="less" scoped>
.Title {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .TitleRight {
    display: flex;

    .Margin {
      margin-left: 20px;
    }
  }
}
</style>
