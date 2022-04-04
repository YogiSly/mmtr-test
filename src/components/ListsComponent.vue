<template>
  <div>
    <div class="btn__close btn__close-list" @click="deleteTask(listData)">
      X
    </div>
    <h3>{{ title_task }}</h3>
    <ul>
      <draggable
        v-model="myList.tasks"
        :list="list_task"
        group="dataBoard"
        @end="onEnd"
      >
        <li
          class="list__element-list"
          v-for="(list, i) in list_task"
          :key="i"
          :value="myList.tasks"
          :class="{ done: list.done }"
        >
          {{ list.title }}
          <div class="list__done" @click="doneLi(i)">V</div>
          <div class="list__delete" @click="deleteLi(i)">X</div>
        </li>
      </draggable>
    </ul>
    <input
      class="list__add-element"
      type="text"
      v-model="listData.nameList"
      @keyup.enter="addList(listData)"
      placeholder="Добавить элемент"
    />
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data() {
    return {
      addListData: "",
      listData: {
        nameList: "",
        idTask: 0,
        numberBoard: this.$route.params.id,
        idList: 0,
        lists: [],
      },
      data_list_task: [],
    };
  },
  props: {
    title_task: { String },
    id_task: { Number },
    list_task: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    tasks() {
      return this.$store.getters["GET_TASKS_DATA"];
    },
    myList: {
      get() {
        return this.$store.state.board;
      },
      set() {},
    },
  },
  methods: {
    addList() {
      this.listData.lists = this.myList.board;
      this.listData.lists.tasks[this.id_task].lists.push({
        title: this.listData.nameList,
        done: false,
      });
      this.$store.dispatch("EDIT_BOARD_DATA", this.listData);
      this.listData.nameList = "";
    },
    deleteTask(listData) {
      this.listData.lists = this.myList.board;
      this.listData.lists.tasks.splice(this.id_task, 1);
      this.$store.dispatch("EDIT_BOARD_DATA", listData);
    },
    deleteLi(i) {
      this.listData.lists = this.myList.board;
      this.listData.lists.tasks[this.id_task].lists.splice(i, 1);
      this.$store.dispatch("EDIT_BOARD_DATA", this.listData);
    },
    onEnd() {
      this.listData.lists = this.myList.board;
      this.$store.dispatch("EDIT_BOARD_DATA", this.listData);
    },
    doneLi(i) {
      this.listData.lists = this.myList.board;
      this.listData.lists.tasks[this.id_task].lists[i].done =
        !this.listData.lists.tasks[this.id_task].lists[i].done;
      this.$store.dispatch("EDIT_BOARD_DATA", this.listData);
    },
  },
  mounted() {},
};
</script>
