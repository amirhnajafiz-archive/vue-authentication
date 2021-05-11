// import your mutation type name constants
import * as types from './mutation-types'

export default new Vuex.Store({
      state: {
        user: {} 
      },
      getters: {
        
      },
      mutations: {
        [types.UPDATE_USER](state, user) {
          state.user = user
        }
      },
      actions: {
      },
})