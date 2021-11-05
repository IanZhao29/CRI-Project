<template>
  <div class="v-application--wrap" style="background-color: #17ACA3">
    <!--导航菜单-->
    <NavBar />
    <UserBar></UserBar>
    <!--头部菜单-->
    <v-app-bar
        app
        dense
        color="#fff"
        class="app-bar"
        elevation="0"
        :value="!isMain"
    >
<<<<<<< HEAD
      123123
=======
      <v-list-item class="px-3">
        <v-img src="../../assets/images/homepage_bg/logo_white.png"></v-img>
      </v-list-item>
      <v-list
          dense
          nav
      >
        <v-list-item class="px-2" link @click="nav2Home">
          <v-list-item-action>
            <v-img src="../../assets/images/homepage_bg/nav_default/nav_default_0.png"></v-img>
          </v-list-item-action>
        </v-list-item>
        <v-list-item class="px-2" link @click="nav2Control">
          <v-list-item-action>
            <v-img src="../../assets/images/homepage_bg/nav_default/nav_default_0.png"></v-img>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-row>
        <v-spacer></v-spacer>
        <v-col align-self="end">User</v-col>
      </v-row>
>>>>>>> 1664dcaf8e71979f1710b6016141ddc754f8709b
    </v-app-bar>
    <!--整体容器-->
    <v-main class="main-content" style="background-color: #f1f1f1;">
      <v-container fluid class="height-100pc" style="margin-top: 20px;">
        <transition name="slide-left" appear>
          <router-view class="main-router-view"/>
        </transition>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import UserBar from "./components/UserBar";

export default {
  name: 'CriProjectLayout',

  data() {
    return {
      isMain: true,
    };
  },

  mounted() {

  },

  components: {
    NavBar,
    UserBar
  },

  methods: {
    nav2Home() {
<<<<<<< HEAD
      this.$router.push('/main');
=======
      this.$router.push('home');
>>>>>>> 1664dcaf8e71979f1710b6016141ddc754f8709b
    },
    nav2Control() {
      this.$router.push('control');
    }
  },
};
</script>

<style lang="scss" scoped>
  body {
    margin: 0;
    padding: 0;
    background-color: #f1f1f1;
  }
  v-list-item:hover {
    background-color: #FFFFFF;
  }
</style>