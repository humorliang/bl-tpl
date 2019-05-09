import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

//state只有在内部才能改变
export default new Vuex.Store({
  state: {
    token: window.sessionStorage.getItem("token"),
    auth: window.sessionStorage.getItem("auth"),
  },
  mutations: {
    [LOGOUT](state) {
      state.token = window.sessionStorage.setItem("token", null);
      state.auth = window.sessionStorage.setItem("auth", false);
    },
    //
    [LOGIN](state, payload) {
      if (payload && payload.token) {
        console.log("LOGIN MOUTON");
        state.token = window.sessionStorage.setItem("token", payload.token);
        state.auth = window.sessionStorage.setItem("auth", true);
      }
    }
  },
  actions: {
    logined({ commit }, token) {

      commit(LOGIN, token)
    },
    logout({ commit }) {
      commit(LOGOUT)
    }
  }
})
