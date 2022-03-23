import axios from 'axios'

const boards = {
  state: {
    boards: []
  },
  getters: {
    getBoards(state) {
      return state.boards
    },
    GET_BOARD_ID(state) {
      return (id) => {
        return state.boards.find((board) => board.id === +id)
      }
    },

  },
  mutations: {
    LOAD_BOARDS(state, data) {
      state.boards = data
    },
    ADD_BOARD: (state, data) => {
      //  console.log(data);
      state.boards.push(data);
    },
    SET_BOARD(state, data) {
      state.goods.id = data
    },
  },
  actions: {
    LOAD_BOARDS({ commit }, data) {
      axios.get('http://localhost:3000/boards')
        .then((data) => { commit('LOAD_BOARDS', data.data); }
        );
      return data
    },
    SAVE_BOARD: async ({ commit }, payload) => {
      axios.post('http://localhost:3000/boards', {
        name: payload,
        tasks: []
      })
        .then((data) => {
          //   console.log(data.data);
          commit('ADD_BOARD', data.data);
          return data.data;
        })
    },
    SET_BOARD({ commit }, data) {
      commit("SET_BOARD", data)
    },

  }
}
export default boards;