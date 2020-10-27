// import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.prototype.$bus = new Vue()
// app.mount('#app')
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
