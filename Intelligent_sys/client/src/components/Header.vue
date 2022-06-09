<template>
<div class="header">
<!--  分为左右两侧-->
    <!--  其中左侧有一个控制左侧栏的按钮icon和标题brand-->
    <!-- 折叠按钮 -->
    <router-link to="/" class="collapse-btn">
                <b-icon icon="chevron-bar-left" aria-hidden="true"></b-icon>
            </router-link>
<!--    <div class="collapse-btn">-->
<!--      <b-icon icon="chevron-bar-left" aria-hidden="true"></b-icon>-->
<!--    </div>-->
    <b-navbar-brand class="brand">智慧渔业养殖管理平台</b-navbar-brand>
    <!--    右侧有一个头像和下拉按钮  -->
    <div class="right">
<!--      <img src="https://placekitten.com/g/30/30" alt="Kitten">-->
<!--      <b-img src="https://picsum.photos/30/30/?image=41" fluid alt="Fluid image"></b-img>-->
<!--      <img class="icon" src="../assets/icon/user.png"  alt="Fluid image">-->
      <!-- Right aligned nav items -->
        <b-nav-item-dropdown class="dropdown">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <b-avatar class="mr-3"></b-avatar>
            <em>您好!章悍文</em>
          </template>
          <b-dropdown-item :to="{ path: '/' }">切换用户</b-dropdown-item>
          <b-dropdown-item :to="{ path: '/' }">退出登录</b-dropdown-item>
        </b-nav-item-dropdown>
    </div>

<!--      &lt;!&ndash; Right aligned nav items &ndash;&gt;-->
<!--      <b-navbar-nav class="header-right">-->
<!--        <b-nav-item right>-->
<!--         <img src="https://placekitten.com/g/30/30" alt="Kitten">-->
<!--        </b-nav-item>-->
<!--        <b-nav-item-dropdown right>-->
<!--          &lt;!&ndash; Using 'button-content' slot &ndash;&gt;-->
<!--          <template #button-content>-->
<!--            <em>章悍文</em>-->
<!--          </template>-->
<!--          <b-dropdown-item href="#">Profile</b-dropdown-item>-->
<!--          <b-dropdown-item href="#">Sign Out</b-dropdown-item>-->
<!--        </b-nav-item-dropdown>-->
<!--      </b-navbar-nav>-->

</div>

</template>

<script>
    export default {
      name: ""
    }
</script>

<style scoped>
@import "../assets/css/header.css";
</style>
