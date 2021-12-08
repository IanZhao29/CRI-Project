<template>
  <div class="login-main">
    <div class="login-left-top">
      <div class="login-left-cloud">
        <img :src="rightCloud" alt="right_cloud">
      </div>
      <div class="login-right-cloud">
        <img :src="middleCloud" alt="middle_cloud">
      </div>
    </div>
    <div class="login-left-bottom">
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
      <el-form class="login-input-box" :model="loginForm" ref="loginFormRef" :rules="loginRules" label-width="80px">
        <el-form-item label="Account:" class="login-account-box" prop="email">
          <el-input type="text" id="account" v-model="loginForm.email"/>
        </el-form-item>
        <el-form-item label="Password:" class="login-password-box" prop="password">
          <el-input type="password" id="password" v-model="loginForm.password"/>
        </el-form-item>
      </el-form>
      <div class="login-button-box">
        <div class="login-button-bg"></div>
        <div class="login-button" @click="login">{{ logInButton }}</div>
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
      logInButton: "log in",

      loginForm: {
        email: "",
        password: ""
      },
      loginRules: {
        email: [
          {required: true, message: 'Enter Username', trigger: 'blur'},
          {min: 1, max: 20, message: 'Username between 1 - 20 long', trigger: 'blur'}
        ],
        password: [
          {required: true, message: 'Enter Password', trigger: 'blur'},
          {min: 1, max: 10, message: 'Username between 1 - 10 long', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    login() {
      console.log(this.loginForm)
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return;
        const formData = new FormData();
        formData.append("email", this.loginForm.email)
        formData.append("password", this.loginForm.password)
        const {data: resultMap} = await this.$http.post("/userinfo/login", formData);//访问后台*/
        if (resultMap.code === 200) {
          window.sessionStorage.setItem("user", resultMap.user);//存储user对象
          await this.$router.push({path: "/main"})//页面路由跳转
          this.$message.success("Operation is Successful")//信息提示
        } else {
          this.$message.error("Operation is Failed")//错误提示
          console.log(resultMap);
        }
      })
    }
  },
}
</script>

<style scoped>
@import "../assets/css/login.css";
</style>