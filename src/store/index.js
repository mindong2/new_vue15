import Vue from "vue";
import user from "@/store/modules/user";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
    message: "",
  },
  getters: {
    formCnt(state) {
      return String(state.count).padStart(2, "0");
    },
    message2(state) {
      return state.message;
    },
  },
  mutations: {
    increase(state) {
      state.count++;
    },
    changeText2(state, value) {
      state.message = value;
    },
    decrease(state) {
      state.count--;
    },
  },
  actions: {
    increase(context) {
      context.commit("increase");
    },
    changeText(context, value) {
      context.commit("changeText2", value);
    },
    decrease(context) {
      context.commit("decrease");
    },
  },
  modules: {
    user,
  },
});
