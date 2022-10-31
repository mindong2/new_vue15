import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list : [],
    btnShow : true,
  },
  getters: { 
    list(state) {
        return state.list;
    }
  },
  mutations: {
    setList(state, list){
        state.list = list;
        state.btnShow = false;
    }
  },
  actions: {
    getList(context) {
        axios({
            url: "https://reqres.in/api/users",
            method : "GET",
            params: {
                page : 1,
            },
        }).then((response) => {
            setTimeout(() => {
                context.commit("setList", response.data.data);
            }, 2000);
        }).catch((error) => {
            console.log(error);
        })
    }
  },
  modules: {
    user
  }
})
