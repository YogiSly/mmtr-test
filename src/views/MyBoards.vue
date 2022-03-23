<template>
  <div class="my-boards">
    <h1>{{ board.board.name }}</h1>

    <button @click="addListForm">Добавить список</button>
    <form
      action=""
      @submit.prevent
      v-show="showListForm"
      class="my-boards__add-list"
    >
      <input
        type="text"
        class="my-boards__add-name-list"
        v-model="taskData.nameList"
        @keyup.enter="addTask(taskData)"
      />

      <!-- <div>{{ card }}</div> -->
    </form>

    <!-- <div>{{ board.board.tasks[0].title }}</div> -->
    <ul>
      <!-- <li v-for="(task, index) in board" :key="index">{{ task.list }}</li> -->
      <li v-for="(task, index) in tasks.tasks" :key="index">
        <div>
          <h3>{{ task.title }}</h3>
          <input type="text" />
          <ul>
            <li v-for="(list, i) in lists.lists" :key="i">
              {{ checkList(list.listId, index, list.title) }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <!-- <div>{{ tasks.tasks }}</div> -->
  </div>
</template>

<script>
//import tasks from "../store/tasks";
//import { mapGetters } from "vuex";
export default {
  name: "MyBoards",
  //  component: { tasks },
  data() {
    return {
      showListForm: false,
      taskData: {
        nameList: "",
        numberBoard: this.$route.params.id,
        numberList: 0,
      },
    };
  },
  computed: {
    board() {
      //console.log(this);
      //    console.log(this.$store.getters["GET_BOARD_DATA"]);
      return this.$store.getters["GET_BOARD_DATA"];
    },
    card() {
      // console.log(this.$store.getters["GET_BOARD_ID"](this.$route.params.id));
      return this.$store.getters["GET_BOARD_ID"](this.$route.params.id);
    },
    tasks() {
      return this.$store.getters["GET_TASKS_DATA"];
    },
    lists() {
      return this.$store.getters["GET_LISTS_DATA"];
    },
  },

  //mapGetters(["getBoards"]),

  methods: {
    addListForm() {
      this.showListForm = !this.showListForm;
    },
    addTask(taskData) {
      this.$store.dispatch("ADD_TASKS_DATA", taskData);
      // return this.$store.getters["GET_TASK_DATA"];
    },
    checkList(listId, i, title) {
      if (listId === i) {
        return title;
      }
    },
  },

  mounted() {
    fetch(`http://localhost:3000/boards/${this.$route.params.id}`).then((res) =>
      res.json().then((data) => {
        this.$store.dispatch("SET_BOARD_DATA", data);
        //console.log(this.$route.params.id);
      })
    );
    this.$store.dispatch("SET_TASKS_DATA", this.taskData);
    this.$store.dispatch("SET_LISTS_DATA", this.taskData);
  },
  // created() {
  // const task = tasks.find((task) => task.id == this.$route.params.id);
  // this.$store.dispatch("loadBoards");
  // },
};
</script>