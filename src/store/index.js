import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    selectedMode: false,
    calendaryMode: false,
    newTaskMode: false,
    taskList: []
  },
  getters: {
    getSelectedMode: state => state.selectedMode,
    getCalendaryMode: state => state.calendaryMode,
    getNewTaskMode: state => state.newTaskMode,
    getTaskList: state => state.taskList
  },
  mutations: {
    toogleSelectedMode (state) {
      state.selectedMode = !state.selectedMode
    },
    toogleCalendaryMode (state) {
      state.calendaryMode = !state.calendaryMode
    },
    toogleNewTaskMode (state) {
      state.newTaskMode = !state.newTaskMode
    },
    addTask (state, task) {
      state.taskList.push(task)
    },
    deleteTask (state, id) {
      state.taskList = state.taskList.filter(task => task.id !== id)
    },
    toogleCompleteAllTask (state) {
      return state.taskList.map(task => {
        task.isComplete = true
        return task
      })
    }
  },
  actions: {
    toogleSelectedMode ({ commit }) {
      commit('toogleSelectedMode')
    },
    toogleCalendaryMode ({ commit }) {
      commit('toogleCalendaryMode')
    },
    toogleNewTaskMode ({ commit }) {
      commit('toogleNewTaskMode')
    },
    addTask ({ commit }, task) {
      commit('addTask', task)
    },
    deleteTask ({ commit }, id) {
      commit('deleteTask', id)
    },
    toogleCompleteAllTask ({ commit }) {
      commit('toogleCompleteAllTask')
    }
  },
  plugins: [createPersistedState()]
})

export default store
