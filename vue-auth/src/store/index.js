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
          return JSON.parse(localStorage.getItem('user')).name;
        },
        getUserEmail: state => {
          return JSON.parse(localStorage.getItem('user')).email;
        },
        getAdminStatus: state => {
          return JSON.parse(localStorage.getItem('user')).is_admin;
        }
      },
      mutations: {
        [types.UPDATE_USER](state, usr_jwt) {
          state.usr_jwt = usr_jwt;
        },
        [types.REMOVE_USER](state) {
          localStorage.removeItem('jwt'); 
          state.user = {};
          state.usr_jwt = null;
          console.log(localStorage.getItem('user'));
        }
      },
      actions: {},
})