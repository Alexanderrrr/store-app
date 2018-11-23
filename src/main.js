import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppCostumers from './components/AppCostumers.vue'
import AppProducts from './components/AppProducts'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [

  {path: '/', redirect: '/costumers' },
  {path: '/costumers', component: AppCostumers},
  {path: '/products', component: AppProducts},

]


const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
