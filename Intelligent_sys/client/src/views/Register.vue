<template>
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
    <div class="inputBox">
		<input type="password" name="password" required="">
		<label>确认密码</label>
    </div>

<!--      <button type="button" class="btn btn-warning btn-sm"><router-link to="/register">注册</router-link></button> -->
<!--    这里也需要验证，用户名是否已经存在-->
      <b-link class="btn btn-primary btn-sm" :to="{ path: 'register_success' }">注册</b-link>
      <b-link class="btn btn-primary btn-sm" :to="{ path: '/' }"style="float: right">返回</b-link>
	  </form>
	</div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

.box
{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width:400px;
 	padding: 40px;
    background:rgba(0,0,0,.8);
	box-sizing:border-box;
	box-shadow:0 15px 25px rgba(0,0,0,.5);
	border-radius: 10px;/*登录窗口边角圆滑*/
}
.box h2
{
	margin:0 0 30px;
	padding:0;
	color:#fff;
	font-size: 30px;
	text-align:center;
	}
	.box .inputBox
	{
		position:relative;
	}
.box .inputBox input
{
	width: 100%;
	padding: 10px 0;
	font-size:25px;
	color: #fff;
	letter-spacing: 1px;
	margin-bottom:30px;/*输入框设置*/
	border:none;
	border-bottom:1px solid #fff;
	outline:none;
	background:transparent;
}
.box .inputBox label
{
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
}
.box .inputBox input:focus ~ label,
.box .inputBox input:valid ~ label
{
    top: -15px;
	left: 0;
	color: #03a9f4;
	font-size: 15px;
}
</style>
