// import your mutation type name constants
import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
      state: {
        user: {} 
      },
      getters: {
        isLoggedin: state => {
          return state.user == null;
        }
      },
      mutations: {
        [types.UPDATE_USER](state, user) {
          state.user = user
        }
      },
      actions: {
      },
})