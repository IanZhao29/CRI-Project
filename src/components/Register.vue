<template>
  <div class="container">
    <section id="content">
      <h1>Register</h1>
      <div id="back" @click="chooseComponent('WelcomeChoose')">
        <i class="iconfont icon-cuowuguanbiquxiao"></i>
      </div>
      <el-form ref="registerFormRef" :rules="registerRules" :model="registerForm" class="login_form" label-width="0">
        <el-form-item prop="username">
          <el-input v-model="registerForm.username" prefix-icon="iconfont icon-yonghu" placeholder="username"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="registerForm.email" prefix-icon="iconfont icon-youxiang" placeholder="email" @blur="checkEmail"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="registerForm.password" type="password" prefix-icon="iconfont icon-mima" placeholder="password"></el-input>
        </el-form-item>
        <el-form-item prop="check_password">
          <el-input v-model="registerForm.checkPassword" type="password" prefix-icon="iconfont icon-mima" placeholder="check password"></el-input>
        </el-form-item>
        <el-form-item class="btns">
            <el-button type="primary" @click="register" style="background-color: #8199af; border: none">Sign up</el-button>
            Already have an account?<el-link type="primary" @click="chooseComponent()">Sign in</el-link>
        </el-form-item>
      </el-form>
    </section><!-- content -->
  </div><!-- container -->
</template>

<script>
export default   {
  name: "Login",
  data(){
    return{
      registerForm:{
        username: "",
        email:"",
        password: "",
        checkPassword:""
      },
      registerRules:{
        username:[
          {required: true, message: 'Enter Username', trigger:'blur'},
          {min: 5, max: 12, message: 'Username between 5 - 12 long', trigger: 'blur'}//blur: 失去焦点属性
        ],
        password:[
          {required: true, message: 'Enter Password', trigger:'blur'},
          {min: 6, max: 10, message: 'Username between 6 - 10 long', trigger: 'blur'}
        ]
      }
    }
  },
  methods:{
    chooseComponent(){
      this.$emit("handleClose")
    },
    checkEmail(email){

      if (email === ''){
        this.$message.error("Email already exists.")
        this.registerForm.email='';
      }
    },
    register(){
      this.$refs.registerFormRef.validate(async valid =>{
        if (valid){
          await this.$router.push('/')
        }
      })
      this.$refs.registerFormRef.validate(async valid =>
      {
       if (!valid) return;
       var formData = new FormData;
       formData.append("username",this.registerForm.username)
       formData.append("email",this.registerForm.email)
       formData.append("password", this.registerForm.password)

       const {data:res} = await this.$http.post("/userinfo/save",formData);//访问后台*/
        console.log(res.message)
       if ( res.message === "Registry success"){
         this.chooseComponent("login");
         this.$message.success("Check your email to confirm register")//信息提示
       }else {
         this.$message.error("Operation is Failed")//错误提示
       }
      })

    },


  }
}
</script>

<style scoped>
h1{
  color: #7E7E7E;
}
.container{
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  border: none;
  margin: 5px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.el-link{
  margin-left: 10px;line-height: 20px
}

#back{
  position: absolute;
  right: 5%;
  top: 10%;
}

.iconfont{
  color: #7E7E7E;
}

.login_form{
  margin-top: 10px;
}

</style>
