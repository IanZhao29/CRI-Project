<template>
  <v-app>
    <keep-alive :include="cachedViews">
      <router-view :key="key" />
    </keep-alive>
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
