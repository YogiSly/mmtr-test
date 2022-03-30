<template>
  <div class="my-board">
    <h2 class="my-board__title">{{ board.board.name }}</h2>
    <div class="my-board__container">
      <div>
        <button
          class="btn btn__add-task"
          v-if="!showTaskForm"
          @click="addTaskForm"
        >
          Добавить список
        </button>
        <form
          action=""
          @submit.prevent
          v-if="showTaskForm"
          class="my-board__add-task"
        >
          <div class="btn__close btn__close-task" @click="closeTaskForm">X</div>
          <input
            type="text"
            class="my-board__add-name-task"
            v-model="taskData.nameTask"
            @keyup.enter="addTask(taskData)"
            placeholder="Новая задача"
          />
        </form>
      </div>
      <tasks-component />
    </div>
  </div>
</template>

<script>
import TasksComponent from "@/components/TasksComponent.vue";
export default {
  name: "MyBoard",
  components: { TasksComponent },
  data() {
    return {
      showTaskForm: false,
      taskData: {
        nameTask: "",
        numberBoard: this.$route.params.id,
        nameList: "",
      },
      showInputList: false,
    };
  },
  props: {},
  computed: {
    board() {
      return this.$store.getters["GET_BOARD_DATA"];
    },
  },
  methods: {
    addTaskForm() {
      this.showTaskForm = true;
    },
    closeTaskForm() {
      this.showTaskForm = false;
    },
    addTask(taskData) {
      this.$store.dispatch("ADD_TASKS_DATA", taskData);
      this.showTaskForm = false;
    },
    showInputListAdd(e) {
      console.log(e);
      this.showInputList = !this.showInputList;
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
  },
  destroyed() {},
};
</script>