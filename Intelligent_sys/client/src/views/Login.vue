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
      <b-link class="btn btn-success btn-sm" :to="{path: 'base_select'}">登录</b-link>
<!--    这里也需要验证，用户名是否已经存在-->
      <b-link class="btn btn-primary btn-sm" :to="{ path: 'register_success' }">注册</b-link>
      <b-link :to="{ path: 'forget' }" style="float: right">忘记密码?</b-link>
	  </form>
      </div>
  </div>
</template>

<script>
    export default {
      name:'Login',
    }

</script>

<style scoped>
@import "../assets/css/login.css";

</style>
