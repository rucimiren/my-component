import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home/Index.vue'

Vue.use(VueRouter)

// 处理异常问题
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch(err => err)
}
VueRouter.prototype.replace = function (location) {
  return originalReplace.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/animate01',
    name: 'animate01',
    component: () =>
      import(/* webpackChunkName: "animate01" */ '@/views/animate01/Index.vue'),
  },
  {
    path: '/animate02',
    name: 'animate02',
    component: () =>
      import(/* webpackChunkName: "animate02" */ '@/views/animate02/Index.vue'),
  },
  {
    path: '/animate03',
    name: 'animate03',
    component: () =>
      import(/* webpackChunkName: "animate03" */ '@/views/animate03/Index.vue'),
  },
  {
    path: '/animate04',
    name: 'animate04',
    component: () =>
      import(/* webpackChunkName: "animate04" */ '@/views/animate04/Index.vue'),
  },
  {
    path: '/animate05',
    name: 'animate05',
    component: () =>
      import(/* webpackChunkName: "animate05" */ '@/views/animate05/Index.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
