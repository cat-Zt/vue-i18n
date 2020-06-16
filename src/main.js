import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// 引入 element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 自己的 国际化
import i18n from './lang'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
