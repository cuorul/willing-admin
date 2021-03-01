import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 权限
import './permission'
// UI框架
import './plugins/vuesax.js'
// 图标
import '@/assets/icons/iconfont.css'
import '@/assets/icons/iconfont.js'
// 样式
import '@/assets/scss/style.scss'

// mockjs测试数据
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
