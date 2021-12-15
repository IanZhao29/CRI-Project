<template>
  <v-app>
    <div class="login d-flex">
      <div class="slide">
        <slide />
      </div>
      <div class="function d-flex flex-column justify-center align-center">
        <v-img
            src="../../public/img/Logo.png"
            max-height="60"
            max-width="76"
        ></v-img>
        <login-function/>
      </div>
    </div>
  </v-app>
</template>

<script>
import slide from "../components/LoginComp/slide";
import LoginFunction from "../components/LoginComp/LoginFunction";

export default {
  name: "Login",
  components: {
    slide,
    LoginFunction
  },
  data() {
    return {
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    }
  }
}
</script>

<style scoped>
.login {
  display: block;
  width: 100%;
  height: 100%;
}
.slide {
  display: block;
  width: 100%;
  height: 100%;
  background-color: #17ACA3;
}
.function {
  display: block;
  width: 500px;
  height: 100%;
  background-color: #FFFFFF;
}
</style>