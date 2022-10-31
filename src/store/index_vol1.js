import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // state는 data
  state: {
    count : 1,
  },
  // getters는 computed 
  getters: { 
    // 특이한점은 this.count가 아닌 state를 파라미터로 받는다.
    formatCnt(state) {
      return String(state.count).padStart(2, "0");
    }
  },
  // mutations는 methods -> 동기 처리, state 직접 바꾸는 역할
  mutations: {
    changeCnt(state, value) {
      state.count += value;
    }
  },
  // actions는 methods와 비슷하지만 비동기 처리를 수행한다. (mutations를 commit 가능하다)
  actions: {
    changeCnt(context, value){
      context.commit('changeCnt', value);
    }
  },
  modules: {
  }
})
