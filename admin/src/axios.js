import axios from 'axios';//导入axios
import router from './router'
import { LOGOUT } from "./store";
import store from './store'

// axios defaults 配置
axios.defaults.timeout = 10000
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Cache-Control'] = 'no-cache'
axios.defaults.baseURL = "http://127.0.0.1:7080"

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token && store.state.auth) {
      // config.headers.Authorization = `Bearer ${store.state.token}`
      if (config.url.indexOf('/auth/token') !== -1) {
        config.headers.Authorization = `Bearer ${store.state.refreshToken}`
      } else {
        config.headers.Authorization = `Bearer ${store.state.token}`
      }
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    // 结合服务端自己封装结果进行部分业务逻辑封装
    return response.data
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401: // 401 清除token信息并跳转到登录页面
          store.commit(LOGOUT)
          router.replace({
            path: 'login',
            query: { redirect: router.currentRoute.fullPath }
          })
          break
        default: // 其它业务或者权限问题直接将 response 返回
          if (error.response) {
            return Promise.resolve(error.response)
          }
          break
      }
      // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
      return Promise.reject(error.response.data)
    }
    // 返回response 为 null 的情况，底层不处理
    return Promise.resolve(error.response)
  }
)
export default axios