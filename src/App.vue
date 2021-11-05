<template>
<<<<<<< HEAD
  <v-app>
    
<!--    <left_side></left_side>-->
=======
  <div id="app">

>>>>>>> 1664dcaf8e71979f1710b6016141ddc754f8709b
    <keep-alive :include="cachedViews">
      <router-view :key="key" />
    </keep-alive>
<!--    <Home1></Home1>-->
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  computed: {
    cachedViews() {
      return this.$store.state.cachedViews;
    },
    key() {
      return this.$route.path;
    },
  },
}
</script>

<style>
@import url("assets/css/global.css");
</style>
