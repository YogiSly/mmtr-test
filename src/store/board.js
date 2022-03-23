//import axios from 'axios'

const board = {
  state: {
    board:
      {}
  },
  mutations: {
    SET_BOARD_DATA(state, data) {
      return state.board = data
    },
    // ADD_TASK_DATA(state, data) {
    //   state.board.tasks.push(data)
    // },
  },
  actions: {
    SET_BOARD_DATA({ commit }, data) {
      commit("SET_BOARD_DATA", data)
    },
    // ADD_TASK_DATA({ commit }, data) {
    //   console.log(data);
    //   axios.post(`http://localhost:3000/tasks?boardId=${data.numberBoard}`, {
    //     title: data.nameList,
    //     boardId: data.numberBoard
    //   })
    //     .then((data) => {
    //       console.log(data.data);
    //       commit('ADD_TASK_DATA', data.data);
    //       return data.data;
    //     })
    // },
  },
  getters: {
    GET_BOARD_DATA(state) {
      return { board: state.board };
    },
    // GET_TASK_DATA(state) {
    //   return { board: state.board.tasks };
    // },
  }
}



export default board;