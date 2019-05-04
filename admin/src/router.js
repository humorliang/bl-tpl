import Vue from 'vue';
import Router from 'vue-router';
import Base from './views/Base.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//导入axios
import axios from 'axios'
// 注册全局函数
axios.defaults.baseURL = "http://localhost:8090"
Vue.prototype.axios = axios;

Vue.use(Router);
Vue.use(ElementUI);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: "/admin",
      name: "base",
      component: Base,
      redirect: {
        name: 'home'
      },
      children: [{
          path: '',
          name: 'home',
          component: () => import( /* webpackChunkName: "about" */ './views/Home.vue')
        }, {
          path: "login",
          name: "login",
          component: () => import( /* webpackChunkName: "about" */ './views/Login.vue')
        }, {
          path: 'post/list',
          name: 'plist',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import( /* webpackChunkName: "about" */ './views/Posts.vue')
        }, {
          path: 'post/add',
          name: 'padd',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import( /* webpackChunkName: "about" */ './views/Post.vue')
        },
        {
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
        }
      ]
    },
    {
      path: "*",
      name: "notfound",
      component: () => import( /* webpackChunkName: "about" */ './views/404.vue')
    },
    {
      path: "login",
      name: "login",
      component: () => import( /* webpackChunkName: "about" */ './views/Login.vue')
    },
  ]
})