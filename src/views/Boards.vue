<template>
  <div class="boards">
    <h1>Доски</h1>

    <button @click="addBoardForm">Новая доска</button>
    <form
      @submit.prevent="submit"
      v-show="showBoardForm"
      class="boards__add-form"
    >
      <input type="text" class="boards__add-name" v-model="name" />
      <button class="boards__cancel-btn" @click.prevent="clearBoardForm">
        Отмена
      </button>
      <button class="boards__add-btn">Сохранить</button>
    </form>
    <div class="boards__list-container">
      <ul class="boards__list">
        <li v-for="(board, index) in getBoards" :key="index">
          <button
            @click="
              $router.push({ name: 'my-boards', params: { id: board.id } })
            "
          >
            {{ board.name }}
          </button>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  //name: "Boards",
  data() {
    return {
      showBoardForm: false,
      name: "",
      tasks: [],
    };
  },
  computed: {
    ...mapGetters(["getBoards", "GET_BOARD_ID"]),
    product() {
      return this.$store.getters["getProductData"];
    },
  },
  methods: {
    addBoardForm() {
      this.showBoardForm = !this.showBoardForm;
    },
    clearBoardForm() {
      this.name = "";
      this.showBoardForm = !this.showBoardForm;
    },
    submit() {
      this.$store.dispatch("SAVE_BOARD", this.name);
      this.name = "";
      this.showBoardForm = !this.showBoardForm;
    },
  },
  mounted() {
    this.$store.dispatch("LOAD_BOARDS", this.boards);
  },
};
</script>
