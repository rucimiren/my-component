import Vue from 'vue'
import VueRouter from 'vue-router'

import Base from '@/views/Base/Index.vue'

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
    name: 'Base',
    component: Base,
  },
  {
    path: '/DatePicker',
    name: 'DatePicker',
    component: () =>
      import(
        /* webpackChunkName: "DatePicker" */ '../views/DatePicker/Index.vue'
      ),
  },
]

const router = new VueRouter({
  routes,
})

export default router
