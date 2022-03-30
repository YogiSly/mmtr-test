<template>
  <div>
    <div class="btn__close btn__close-list" @click="deleteTask(listData)">
      X
    </div>
    <h3>{{ title_task }}</h3>
    <vue-draggable-group
      v-model="list_task"
      :groups="tasks.tasks"
      :data-id="id_task"
      @change="onGroupsChange"
    >
      <ul class="drag-inner-list" :data-id="id_task">
        <li
          class="list__element-list drag-item"
          v-for="(list, i) in list_task"
          :key="i"
          :data-id="i"
        >
          {{ list.title }}
          <div class="list__delete" @click="deleteLi(listData, i)">X</div>
        </li>
      </ul>
    </vue-draggable-group>
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
export default {
  data() {
    return {
      addListData: "",
      listData: {
        nameList: "",
        idTask: 0,
        numberBoard: this.$route.params.id,
        idList: 0,
      },
    };
  },
  props: {
    title_task: { String },
    list_task: {
      type: Array,
      default() {
        return [];
      },
    },
    // task: { Array },
    id_task: { Number },
    options: { Object },
  },
  computed: {
    tasks() {
      return this.$store.getters["GET_TASKS_DATA"];
    },
  },
  methods: {
    addList(listData) {
      this.listData.idTask = this.id_task;
      this.$store.dispatch("ADD_LIST_DATA", listData);
    },
    deleteTask(listData) {
      this.listData.idTask = this.id_task;
      this.$store.dispatch("DELETE_TASK_DATA", listData);
    },
    deleteLi(listData, i) {
      this.listData.idList = i;
      this.listData.idTask = this.id_task;
      this.$store.dispatch("DELETE_LIST_DATA", listData);
    },
    onGroupsChange() {
      // console.log(e);
      // console.log(this.id_task);
    },
  },
  // mounted() {
  // console.log(this.list_task);
  // console.log(this.tasks.tasks[this.id_task]);
  // },
};
</script>
