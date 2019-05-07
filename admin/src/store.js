import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

//state只有在内部才能改变
export default new Vuex.Store({
  state: {
    token: null,
    refreshToken: null,
    auth: false,
  },
  mutations: {
    [LOGOUT] (state) {
      state.token = null
      state.refreshToken = null
      state.auth = false
    },
    //
    [LOGIN] (state, payload) {
      if (payload && payload.token) {
        state.token = payload.token
        state.refreshToken = payload.refreshToken
        state.auth = true
      }
    }
  },
  actions: {
    logined ({commit}, token) {
      commit(LOGIN, token)
    },
    logout ({commit}) {
      commit(LOGOUT)
    }
  }
})
