import axios from 'axios'
const board = {
  state: {
    board:
      {}
  },
  mutations: {
    SET_BOARD_DATA(state, data) {
      return state.board = data
    },
    SET_TASKS_DATA(state, data) {
      return state.board.tasks = data.tasks
    },
  },
  actions: {
    SET_BOARD_DATA({ commit }, data) {
      commit("SET_BOARD_DATA", data)
    },
    EDIT_BOARD_DATA({ commit }, data) {
      axios.patch(`http://localhost:3000/boards/${data.numberBoard}`, data.lists)
        .then((res) => {
          commit("SET_BOARD_DATA", res.data)
          return res.data;
        })
    },
    CLEAR_BOARD_DATA({ commit }, data) {
      commit("SET_BOARD_DATA", data)
    }
  },
  getters: {
    GET_BOARD_DATA(state) {
      return { board: state.board };
    },
    GET_TASKS_DATA(state) {
      return { tasks: state.board.tasks };
    },
  }
}

export default board;