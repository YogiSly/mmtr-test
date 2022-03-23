<template>
  <div id="app">
    <button
      type="button"
      class="btn btn-outline-light"
      @click="$router.push({ name: 'boards' })"
    >
      к доскам
    </button>

    <router-view></router-view>
  </div>
</template>

<script>
//import Boards from "/components/Boards.vue";
export default {
  name: "App",
  components: {
    //   Boards,
  },
};
</script>

<style>
</style>
