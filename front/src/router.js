import Vue from 'vue'
import VueRouter from 'vue-router'

import Top from '@/views/Top'
import Input from '@/views/Input'

Vue.use(VueRouter)
// VueRouterインスタンスを生成する
const router = new VueRouter({
  mode:"history",
  routes: [
    {
      path:"/",
      component: Top
    },
    {
      path:"/input",
      component: Input
    }
  ],
})

export default router
