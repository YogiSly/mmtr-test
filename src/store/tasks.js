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
      return state.tasks = data.tasks
    },
  },
  actions: {
    SET_TASKS_DATA({ commit }, data) {
      axios.get(`http://localhost:3000/boards/${data.numberBoard}`)
        .then((data) => {
          commit('SET_TASKS_DATA', data.data.tasks);
        }
        );
      return data.data
    },
    ADD_TASKS_DATA({ commit }, data) {
      axios.get(`http://localhost:3000/boards/${data.numberBoard}`)
        .then((res) => {
          res.data.tasks.push({ title: data.nameTask, lists: [] })
          return res.data
        })
        .then((update) => {
          axios.patch(`http://localhost:3000/boards/${data.numberBoard}`, update)
            .then((data) => {
              commit('ADD_TASKS_DATA', data.data);
              return data.data;
            })
        })
    },
    ADD_LIST_DATA({ commit }, data) {
      axios.get(`http://localhost:3000/boards/${data.numberBoard}`)
        .then((res) => {
          res.data.tasks[data.idTask].lists.push({ title: data.nameList })
          return res.data
        })
        .then((update) => {
          axios.patch(`http://localhost:3000/boards/${data.numberBoard}`, update)
            .then((data) => {
              commit('ADD_TASKS_DATA', data.data);
              return data.data;
            })
        })
    },
    DELETE_TASK_DATA({ commit }, data) {
      axios.get(`http://localhost:3000/boards/${data.numberBoard}`)
        .then((res) => {
          res.data.tasks.splice(data.idTask, 1);
          return res.data
        })
        .then((update) => {
          axios.patch(`http://localhost:3000/boards/${data.numberBoard}`, update)
            .then((data) => {
              commit('ADD_TASKS_DATA', data.data);
              return data.data;
            })
        })
    },
    DELETE_LIST_DATA({ commit }, data) {
      axios.get(`http://localhost:3000/boards/${data.numberBoard}`)
        .then((res) => {

          res.data.tasks[data.idTask].lists.splice(data.idList, 1);
          return res.data
        })
        .then((update) => {
          axios.patch(`http://localhost:3000/boards/${data.numberBoard}`, update)
            .then((data) => {
              commit('ADD_TASKS_DATA', data.data);
              return data.data;
            })
        })
    }
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