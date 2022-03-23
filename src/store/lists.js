import axios from 'axios'

const lists = {
  state: {
    lists:
      {}
  },
  mutations: {
    SET_LISTS_DATA(state, data) {
      return state.lists = data
    },
    ADD_LISTS_DATA(state, data) {
      // console.log(typeof (state.lists));
      // console.log(state.lists);
      state.lists.push(data)
    },
  },
  actions: {
    SET_LISTS_DATA({ commit }, data) {
      // commit("SET_lists_DATA", data)
      axios.get(`http://localhost:3000/lists?boardId=${data.numberBoard}`)
        .then((data) => { commit('SET_LISTS_DATA', data.data); }
        );
      return data.data
    },
    ADD_LISTS_DATA({ commit }, data) {
      //  console.log(data);
      axios.post(`http://localhost:3000/lists`, {

        title: data.nameList,
        boardId: data.numberBoard
      })
        .then((data) => {
          console.log(data);
          commit('ADD_LISTS_DATA', data.data);
          return data.data;
        })
    },
  },
  getters: {
    GET_LISTS_DATA(state) {
      return { lists: state.lists };
    },
    GET_TASK_DATA(state) {
      return { lists: state.lists.lists };
    },
  }
}



export default lists;