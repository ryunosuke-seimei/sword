import Vue from 'vue'
import VueRouter from 'vue-router'

import Title from '@/components/HelloWorld'

Vue.use(VueRouter)
// VueRouterインスタンスを生成する
const router = new VueRouter({
  mode:"history",
  routes: [
    {
      path:"/",
      component: Title
    }
  ],
})

export default router
