<template>
  <div class="main">
    <div class="top">
      <div class="middle-cloud">
        <img :src="middleCloud" alt="middle_cloud">
      </div>
      <div class="right-cloud">
        <img :src="rightCloud" alt="right_cloud">
      </div>
    </div>
    <div class="left">
      <div class="welcome-text">
        {{ welcome }}
      </div>
      <div class="earth">
        <img :src="earth" alt="earth">
      </div>
    </div>
    <div class="right">
      <div class="login-box"></div>
      <div class="logo-login">
        <img :src="logo" alt="CRI_logo">
      </div>
      <div class="other-way-to-login">
        <div class="Gmail-bg"></div>
        <div class="Gmail-button">{{ gmail }}</div>
      </div>
      <div class="login-input-box">
        <label for="account" class="account-box">
          <div class="account-name">Account:</div>
          <input class="account-input" type="text" id="account">
        </label>
        <label for="password" class="password-box">
          <div class="password-name">Password:</div>
          <input class="password-input" type="password" id="password">
        </label>
      </div>
      <div class="login-button-box" v-on:click="goToHome">
        <div class="login-button-bg"></div>
        <div class="login-button">{{ logInButton }}</div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      middleCloud: require("../assets/images/login/middle_cloud.png"),
      rightCloud: require("../assets/images/login/right_cloud.png"),
      logo: require("../assets/images/login/logo_1.png"),
      earth: require("../assets/images/login/earth.png"),
      welcome: "Welcome \n to \n Climate Response Ireland",
      gmail: "login with gmail",
      logInButton: "log in"
    }
  },
  methods: {
    goToHome() {
      this.$router.push('/main');
    }
  },
}
</script>

<style scoped>
@import "../assets/css/login.css";
</style>