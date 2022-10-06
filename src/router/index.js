import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WhereView from '../views/WhereView.vue'
import BoardView from '../views/BoardView.vue'
import DetailView from '../views/DetailView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/where',
    name: 'where',
    component: WhereView
  },
  {
    path : '/board',
    name: 'board',
    component: BoardView
  },
  {
    // 이름이 꼭 id가 아니어도 작동한다.
    path : '/detail/:id',
    name : 'detail',
    component : DetailView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
