import Vue from "vue";
import VueRouter from "vue-router";
import SearchView from "@/views/SearchView.vue";
import BeforeLoginView from "@/views/BeforeLoginView.vue";
import LoginView from "@/views/LoginView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path : '/search',
    name: "search",
    component : SearchView
  },
  {
    path : '/before',
    name: "before",
    component : BeforeLoginView
  },
  {
    path : '/login',
    name: "login",
    component : LoginView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
