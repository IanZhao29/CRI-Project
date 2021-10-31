<template>
  <div id="app">
    
<!--    <left_side></left_side>-->
    <keep-alive :include="cachedViews">
      <router-view :key="key" />
    </keep-alive>
<!--    <Home1></Home1>-->
  </div>
</template>

<script>
// import left_side from "@/components/lest_side/left_side";

export default {
  name: 'App',
  components: {
    // left_side
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
