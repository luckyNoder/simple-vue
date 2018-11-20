import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import iView from 'iview'

// css
import 'iview/dist/styles/iview.css'
import 'normalize.css'
Vue.config.productionTip = false
Vue.use(iView)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
