import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active_city: true,
    active_coords: false,
    active_gps: false,
    active_ip: false
  },
  mutations: {
    change_search_type_preference_city (state) {
      state.active_city = true
      state.active_coords = false
      state.active_gps = false
      state.active_ip = false
    },
    change_search_type_preference_coords (state) {
      state.active_city = false
      state.active_coords = true
      state.active_gps = false
      state.active_ip = false
    },
    change_search_type_preference_gps (state) {
      state.active_city = false
      state.active_coords = false
      state.active_gps = true
      state.active_ip = false
    },
    change_search_type_preference_ip (state) {
      state.active_city = false
      state.active_coords = false
      state.active_gps = false
      state.active_ip = true
    }
  },
  actions: {
  },
  modules: {
  }
})
