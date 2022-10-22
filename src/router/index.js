import Vue from "vue";
import VueRouter from "vue-router";
import MixinView from "@/components/MixinView.vue"
import MixinView2 from "@/components/MixinView2.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: '/mixin',
    name: 'mixin',
    component: MixinView
  },
  {
    path: '/mixin2',
    name: 'mixin2',
    component: MixinView2
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
