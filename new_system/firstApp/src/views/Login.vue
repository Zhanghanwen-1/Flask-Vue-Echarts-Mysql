<template>
      <div class="login-wrap">
    <div class="box">
            <h2>智慧渔业养殖管理平台</h2>
  <form method="post">
    <div class="inputBox">
      <input type="text" name="username" required="">
      <label>用户名</label>
    </div>
    <div class="inputBox">
		<input type="password" name="password" required="">
		<label>密码</label>
    </div>
      <el-button type="primary" @click="submitForm()">登录</el-button>
<!--    这里也需要验证，用户名是否已经存在@click="registerForm()"@click="forgetForm()"-->
      <el-button type="primary" >注册</el-button>
      <el-button type="primary" >忘记密码?</el-button>
	  </form>
      </div>
  </div>
</template>

<script>

    export default {
      methods: {
        submitForm() {
          //这里写逻辑是否验证通过
          this.$router.push('/base')
        }
      }
    };
</script>

<style scoped>
@import "../assets/css/login.css";
</style>
