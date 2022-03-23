import Vue from 'vue'
import Vuex from 'vuex'
import boards from './boards'
import board from './board'
import tasks from './tasks'
import lists from './lists'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    boards,
    board,
    tasks,
    lists
  },
  namespaced: true,


})

export default store