import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  //状态、数据存放
  state: {
    stateTest: 1,
  },
  //计算属性
  getters: {},
  //同步
  mutations: {
    ADD(state) {
      state.stateTest = state.stateTest + 1;
    },
  },
  //同步、异步
  actions: {
    add({ commit }) {
      commit("ADD");
    },
  },

  //vuex持久化
  plugins: [
    createPersistedState({
      reducer(val) {
        return {
          // 只储存state中的assessmentData
          stateTest: val.stateTest,
        };
      },
    }),
  ],
});

export default store;
