export default {
  namespaced: true,
  state: {
    name: "홍길동",
    id: "hong1234",
  },
  getters: {
    id(state) {
      return state.id;
    },
    name(state) {
      return state.name;
    },
  },
  mutations: {},
  actions: {},
};
