import Vue from 'vue'
import Vuex from 'vuex'
import { findIndex, filter, sortBy, find } from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    ADD_TASK: (state, task) => {
      state.tasks = [...state.tasks, task]
    },
    SET_TASK_COMPLETE: (state, id) => {
      const index = findIndex(state.tasks, task => task.id === id)
      const tasks = [...state.tasks]
      tasks[index].isComplete = !tasks[index].isComplete
      state.tasks = tasks
    },
    DELETE_TASK: (state, id) => {
      state.tasks = filter(state.tasks, task => task.id !== id)
    }
  },
  actions: {
  },
  getters: {
    GET_TASKS: state => {
      return sortBy(state.tasks, ['isComplete', 'id'])
    },
    GET_TASK_BY_ID: state => id => {
      return find(state.tasks, task => task.id === id)
    }
  },
  modules: {
  }
})
