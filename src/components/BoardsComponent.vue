<template>
  <div class="boards__list-container">
    <ul class="boards__list">
      <li class="boards__li" v-for="(board, index) in GET_BOARDS" :key="index">
        <button
          class="btn btn__boards"
          @click.prevent="
            $router.push({ name: 'my-board', params: { id: board.id } })
          "
        >
          {{ board.name }}
        </button>
        <div class="boards__delete" @click.prevent="deleteBoard(board.id)">
          X
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["GET_BOARDS", "GET_BOARD_ID"]),
  },
  methods: {
    deleteBoard(id) {
      console.log(id);
      this.$store.dispatch("DELETE_BOARD", id);
    },
  },
};
</script>