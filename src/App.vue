<template>
  <div id="app">

    <keep-alive :include="cachedViews">
      <router-view :key="key" />
    </keep-alive>
<!--    <Home1></Home1>-->
  </div>
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
