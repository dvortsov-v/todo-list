import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    selectedMode: false,
    calendaryMode: false
  },
  getters: {
    getSelectedMode: state => {
      return state.selectedMode
    },
    getCalendaryMode: state => {
      return state.calendaryMode
    }
  },
  mutations: {
    toogleSelectedMode (state) {
      state.selectedMode = !state.selectedMode
    },
    toogleCalendaryMode (state) {
      state.calendaryMode = !state.calendaryMode
    }
  },
  actions: {
    toogleSelectedMode ({ commit }) {
      commit('toogleSelectedMode')
    },
    toogleCalendaryMode ({ commit }) {
      commit('toogleCalendaryMode')
    }
  }
})

export default store
