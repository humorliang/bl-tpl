import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios'


Vue.config.productionTip = false
Vue.prototype.axios = axios;

//路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token && store.state.auth) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
