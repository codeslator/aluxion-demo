import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details',
    name: 'Details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.  
    component: () => import(/* webpackChunkName: "Details" */ '../views/DetailsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
