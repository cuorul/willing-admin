import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/',
    redirect: '/index/home'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/layout/Layout.vue'),
    redirect: '/index/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/Home'),
      meta: { title: '首页', icon: 'dashboard', affix: true }
    },
    {
      path: 'about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: 'buttons',
      name: 'Buttons',
      component: () => import('@/views/components/vuesax/buttons/index.vue')
    },
    {
      path: 'colors',
      name: 'Colors',
      component: () => import('@/views/components/vuesax/colors/index.vue')
    }]
  }
]

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
