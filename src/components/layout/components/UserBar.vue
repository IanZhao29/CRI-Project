<template>
  <v-navigation-drawer
      app
      color="#fff"
      permanent
      class="menu-navigation-drawer"
      mini-variant
      expand-on-hover
      right
  >

  </v-navigation-drawer>
</template>

<script>
export default {
  name: "UserBar"
}
</script>

<style scoped>
.menu-navigation-drawer {
  z-index: 9999;
}
</style>