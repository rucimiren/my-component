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
    path: '/animate',
    name: 'animate',
    component: () =>
      import(/* webpackChunkName: "animate" */ '@/views/animate/Index.vue'),
  },
  {
    path: '/drag',
    name: 'drag',
    component: () =>
      import(/* webpackChunkName: "drag" */ '@/views/drag/index.vue'),
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach(async (to, from, next) => {
  document.title = '肖肖'
  next()
})

export default router
