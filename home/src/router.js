import Vue from 'vue'
import Router from 'vue-router'
import Base from './views/Base.vue'
//导入axios
import axios from 'axios'
// 注册全局函数
axios.defaults.baseURL = "http://localhost:8090"
Vue.prototype.axios = axios;

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "base",
      component: Base,
      redirect: {
        name: 'home'
      },
      children: [{
        path: '',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ './views/Home.vue')
        },
        {
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
          path: 'list/kind/:kind_id',
          name: 'list',
          component: () => import( /* webpackChunkName: "list" */ './views/List.vue')
        },
        {
          path: 'post/:id',
          name: 'post',
          component: () => import( /* webpackChunkName: "post" */ './views/Post.vue')
        },
        {
          path: 'levcots',
          name: 'levcots',
          component: () => import( /* webpackChunkName: "levcots" */ './views/Levcots.vue')
        }
      ]
    },
    {
      path: '*',
      name: 'notfound',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/404.vue')
      }
  ]
})