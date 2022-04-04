<template>
  <div>
    <ul class="list">
      <li
        class="list__element"
        v-for="(task, index) in tasks.tasks"
        :key="index"
      >
        <lists-component
          :title_task="task.title"
          :list_task="task.lists"
          :id_task="index"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import ListsComponent from "@/components/ListsComponent.vue";
export default {
  components: {
    ListsComponent,
  },
  computed: {
    tasks() {
      return this.$store.getters["GET_TASKS_DATA"];
    },
  },
};
</script>