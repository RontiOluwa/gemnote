import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css';
import VueRouter from 'vue-router'
import Routes from './route'


Vue.use(VueRouter)
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
