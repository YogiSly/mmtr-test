<template>
  <div id="app">
    <div class="main" @click="$router.push({ name: 'boards' })">
      <img src="@/assets/images/smile2.png" alt="" srcset="" />
      К доскам
    </div>

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
