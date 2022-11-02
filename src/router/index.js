import Vue from "vue";
import VueRouter from "vue-router";
import AboutView from "@/views/AboutView";
import HomeView from "@/views/HomeView";

Vue.use(VueRouter);

const routes = [
  {
    component : HomeView,
    name : 'home',
    path : '/'
  },
  
  {
    component : AboutView,
    name: 'about',
    path : '/about'
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
