<template>
  <div class="login-main">
    <div class="login-top">
      <div class="login-middle-cloud">
        <img :src="middleCloud" alt="middle_cloud">
      </div>
      <div class="login-right-cloud">
        <img :src="rightCloud" alt="right_cloud">
      </div>
    </div>
    <div class="login-left">
      <div class="login-welcome-text">
        {{ welcome }}
      </div>
      <div class="login-earth">
        <img :src="earth" alt="earth">
      </div>
    </div>
    <div class="login-right">
      <div class="login-box"></div>
      <div class="login-logo">
        <img :src="logo" alt="CRI_logo">
      </div>
      <div class="other-way-to-login">
        <div class="login-Gmail-bg"></div>
        <div class="login-Gmail-button">{{ gmail }}</div>
      </div>
      <div class="login-input-box">
        <label for="account" class="login-account-box">
          <div class="login-account-name">Account:</div>
          <input class="login-account-input" type="text" id="account">
        </label>
        <label for="password" class="login-password-box">
          <div class="login-password-name">Password:</div>
          <input class="login-password-input" type="password" id="password">
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