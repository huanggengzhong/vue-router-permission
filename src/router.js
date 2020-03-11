import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
export const authRoutes = [ // 权限
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart'),//一级购物车页面
    children: [
      {
        path: 'cart-list',
        name: 'cart-list',
        component: () => import('@/views/CartList'),//二级购物车列表页面
        children: [
          {
            path: 'lottery',
            name: 'lottery',
            component: () => import('@/views/Lottery'),//三级彩票页面
          },
          {
            path: 'product',
            name: 'product',
            component: () => import('@/views/Product'),//三级产品页面
          },
        ],
      },
    ],
  },
];
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'*',
      component:{
        render:h=>h('h1',{},'Not Found')
      }
    }
  ]
})
