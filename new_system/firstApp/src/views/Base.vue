<template>
<el-container class="container">
<!--  头部-->
<!--  <el-header style="height:60px;background-color: #242f42">-->
<!--    <Header></Header>-->
<!--  </el-header>-->
<!--  侧边栏-->
  <el-aside class="aside" style="width:200px;">
    <el-menu background-color="#324157" text-color="#ffffff" active-text-color="#ffd04b" style="border-right:0px" @open="handleOpen" @close="handleClose" router>
      <el-submenu class="submenu" index="">
        <template slot="title">
          <i class="iconfont icon-dingwei"></i>
          <span>基地选择</span>
        </template>
        <el-menu-item-group>
          <el-menu-item  class="el-menu-item" v-for="(item, i) in navList" :key="i" :index="item.name">
            <template slot="title">
              <span>{{ item.navItem }}</span>
            </template>
          </el-menu-item>
          </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
<!--  主内容区,这里是一个基地分布地图-->
  <el-main class="main">舟山养殖基地分布</el-main>
</el-container>
</template>

<script>
    export default {
      data(){
        return{
          navList:[
            {name: '/overview', navItem:"桃花岛养殖基地"},
            {name: '/overview', navItem:"东极岛养殖基地"},
            {name: '/overview', navItem:"嵊泗岛养殖基地"}
          ]
        }
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
@import "../assets/css/base.css";
</style>
