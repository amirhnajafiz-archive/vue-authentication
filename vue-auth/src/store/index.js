// import your mutation type name constants
import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    usr_jwt: null
  },
  getters: {
    isLoggedin: state => {
      return state.usr_jwt == null;
    },
    getUserName: state => {
      return state.user.name;
    },
    getUserEmail: state => {
      return state.user.email;
    },
    getAdminStatus: state => {
      return state.user.is_admin;
    }
  },
  mutations: {
    [types.UPDATE_USER](state) {
      state.usr_jwt = localStorage.getItem('jwt');
      state.user = JSON.parse(localStorage.getItem('user'));
      if (!this.getters.isLoggedin)
        this.REMOVE_USER;
    },
    [types.REMOVE_USER](state) {
      localStorage.removeItem('jwt');
      state.user = undefined;
      state.usr_jwt = null;
      console.log(localStorage.getItem('user'));
    }
  },
  actions: {},
})