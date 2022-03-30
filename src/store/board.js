const board = {
  state: {
    board:
      {}
  },
  mutations: {
    SET_BOARD_DATA(state, data) {
      return state.board = data
    },
  },
  actions: {
    SET_BOARD_DATA({ commit }, data) {
      commit("SET_BOARD_DATA", data)
    },
  },
  getters: {
    GET_BOARD_DATA(state) {
      return { board: state.board };
    },
  }
}



export default board;