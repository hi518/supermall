// import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

console.log(123);
Vue.prototype.$bus = new Vue()
// app.mount('#app')
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
