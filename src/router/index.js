import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView";
import LoginView from "@/views/LoginView";
import BoardView from "@/views/BoardView";
import BoardFormView from "@/views/BoardFormView";
import BoardDetail from "@/views/BoardDetail";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/board",
    name: "board",
    component: BoardView,
  },
  {
    path: "/board/:id",
    name: "boardDetail",
    component: BoardDetail,
  },
  {
    path: "/board/form",
    name: "boardForm",
    component: BoardFormView,
  },
  {
    path: "/board/form:id",
    name: "boardForm",
    component: BoardFormView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
