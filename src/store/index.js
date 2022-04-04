import Vue from 'vue';
import Vuex from 'vuex';
import boards from './boards';
import board from './board';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    boards,
    board,
  },
  namespaced: true,


});

export default store;