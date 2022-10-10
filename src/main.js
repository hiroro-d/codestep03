import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/tailwind.css'

Vue.config.productionTip = false

// ページ内リンク用 npm install vue-scrollto が必要
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
