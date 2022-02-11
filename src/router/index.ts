import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/details',
    name: 'details',
    component: () => import(/* webpackChunkName: "Details" */ '../views/DetailsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
