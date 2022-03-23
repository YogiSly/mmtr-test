import axios from 'axios'

const tasks = {
  state: {
    tasks:
      {}
  },
  mutations: {
    SET_TASKS_DATA(state, data) {
      return state.tasks = data
    },
    ADD_TASKS_DATA(state, data) {
      // console.log(typeof (state.tasks));
      // console.log(state.tasks);
      state.tasks.push(data)
    },
  },
  actions: {
    SET_TASKS_DATA({ commit }, data) {
      // commit("SET_TASKS_DATA", data)
      axios.get(`http://localhost:3000/tasks?boardId=${data.numberBoard}`)
        .then((data) => { commit('SET_TASKS_DATA', data.data); }
        );
      return data.data
    },
    ADD_TASKS_DATA({ commit }, data) {
      //  console.log(data);
      axios.post(`http://localhost:3000/tasks`, {

        title: data.nameList,
        boardId: data.numberBoard
      })
        .then((data) => {
          console.log(data);
          commit('ADD_TASKS_DATA', data.data);
          return data.data;
        })
    },
  },
  getters: {
    GET_TASKS_DATA(state) {
      return { tasks: state.tasks };
    },
    GET_TASK_DATA(state) {
      return { tasks: state.tasks.tasks };
    },
  }
}



export default tasks;