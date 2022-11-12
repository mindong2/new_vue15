export default {
  namespaced: true,
  state: {
    token: sessionStorage.getItem("access-token"),
    user: {
      id: sessionStorage.getItem("user-id"),
      name: sessionStorage.getItem("user-name"),
    },
  },
  getters: {
    id(state) {
      return state.user.id;
    },
    name(state) {
      return state.user.name;
    },
    token(state) {
      return state.token;
    },
    // 토근 여부 = 로그인여부
    hasToken(state) {
      return !!state.token; //데이터 있으면 true 없으면 return
    },
  },
  mutations: {
    setId(state, id) {
      state.id = id;
      sessionStorage.setItem("user-id", id);
    },

    setName(state, name) {
      state.user.name = name;
      sessionStorage.setItem("user-name", name);
    },

    setToken(state, token) {
      state.token = token;
      sessionStorage.setItem("access-token", token);
    },
  },
  actions: {
    setName(context, name) {
      context.commit("setName", name);
    },
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setId({ commit }, id) {
      commit("setId", id);
    },
    // 초기화
    initUser({ commit }) {
      commit("setId", "");
      commit("setToken", "");
      commit("setName", "");
    },
  },
};
