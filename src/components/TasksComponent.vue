<template>
  <div v-drag-and-drop:options="options">
    <ul class="list">
      <li
        class="list__element"
        v-for="(task, index) in tasks.tasks"
        :key="index"
        :data-id="index"
      >
        <lists-component
          :title_task="task.title"
          :list_task="task.lists"
          :id_task="index"
          :options="options"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import { VueDraggableDirective } from "vue-draggable";
import ListsComponent from "@/components/ListsComponent.vue";
export default {
  directives: {
    dragAndDrop: VueDraggableDirective,
  },
  data() {
    return {
      options: {
        dropzoneSelector: ".drag-inner-list",
        draggableSelector: ".drag-item",
        excludeOlderBrowsers: true,
        multipleDropzonesItemsDraggingEnabled: true,
        showDropzoneAreas: true,
        // onDrop: function (e) {
        //   console.log(e);
        // },
        // onDragstart: function (event) {},
        // onDragenter: function (event) {},
        // onDragover: function (event) {},
        onDragend: function () {
          // console.log(event);
        },
      },
    };
  },
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