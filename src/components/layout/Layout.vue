<template>
  <v-app>
    <v-navigation-drawer
        app
        permanent
        mini-variant
        mini-variant-width="7.6%"
        color="#17ACA3"
    >
      <v-list-item class="px-3">
        <v-img src="../../assets/images/homepage_bg/logo_white.png"></v-img>
      </v-list-item>
      <v-list
          dense
          nav
      >
        <v-list-item class="px-2" link @click="nav2Home">
          <v-list-item-action>
            <v-img src="../../assets/images/homepage_bg/house_default/house_defalut_0.png"></v-img>
          </v-list-item-action>
        </v-list-item>
        <v-list-item class="px-2" link @click="nav2Control">
          <v-list-item-action>
            <v-img src="../../assets/images/homepage_bg/house_default/house_defalut_0.png"></v-img>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-row>
        <v-spacer></v-spacer>
        <v-col align-self="end">User</v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container fluid style="background-color: #f1f1f1">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'CriProjectLayout',

  data() {
    return {};
  },

  mounted() {

  },

  methods: {
    nav2Home() {
      console.log("Nav 2 Page")
    },
    nav2Control() {
      this.$router.push('/control');
    }
  },
};
</script>

<style lang="scss" scoped>
  v-list-item:hover {
    background-color: #FFFFFF;
  }
</style>