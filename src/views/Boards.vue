<template>
  <div class="boards">
    <div class="boards__container">
      <div class="btn btn__add" @click="showBoardForm">
        <img class="btn__add-plus" src="@/assets/images/plus.svg" />
        Новая доска
      </div>
      <div class="btn__close" @click.prevent="clearBoardForm" v-if="formAdd">
        X
      </div>
      <form @submit.prevent="submit" v-show="formAdd" class="boards__add-form">
        <span class="boards__name">Название доски</span>
        <input type="text" class="boards__add-name" v-model="name" />
        <div class="boards__block-btn">
          <button class="btn btn__cancel-form" @click.prevent="clearBoardForm">
            Отмена
          </button>
          <button class="btn btn__add-form" @click.prevent="submit">
            Сохранить
          </button>
        </div>
      </form>
    </div>
    <boards-component />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BoardsComponent from "@/components/BoardsComponent.vue";
export default {
  components: {
    BoardsComponent,
  },
  data() {
    return {
      formAdd: false,
      name: "",
      tasks: [],
    };
  },

  computed: {
    ...mapGetters(["GET_BOARDS", "GET_BOARD_ID"]),
  },
  methods: {
    showBoardForm() {
      this.formAdd = true;
    },
    clearBoardForm() {
      this.name = "";
      this.formAdd = false;
    },
    submit() {
      this.$store.dispatch("SAVE_BOARD", this.name);
      this.name = "";
      this.formAdd = false;
    },
  },
  mounted() {
    this.$store.dispatch("LOAD_BOARDS", this.boards);
  },
};
</script>
