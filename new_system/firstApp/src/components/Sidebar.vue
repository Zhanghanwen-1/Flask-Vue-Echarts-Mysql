<template>

<el-menu default-active="1"
      class="el-menu-vertical-demo" background-color="#324157" text-color="#ffffff" active-text-color="#ffd04b" style="border-right:0px"
         @open="handleOpen" @close="handleClose" router :collapse="isCollapse">
  <el-menu-item index="/overview">
        <i class="el-icon-menu"></i>
        <span slot="title">基地总览</span>
      </el-menu-item>
  <el-submenu index="2">
        <template slot="title">
          <i class="iconfont icon-yuqun"></i>
          <span>鱼群监控</span>
        </template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="2-1">鱼群监测点1</el-menu-item>
          <el-menu-item index="2-2">鱼群监测点2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
  <el-submenu index="3">
        <template slot="title">
          <i class="iconfont icon-shishijiance"></i>
          <span>水质检测</span>
        </template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="3-1">水质监测点1</el-menu-item>
          <el-menu-item index="3-2">水质监测点2</el-menu-item>
          <el-menu-item index="3-3">水质监测点3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="4" >
        <i class="iconfont icon-yusiliao"></i>
        <span slot="title">投喂设施</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="iconfont icon-lvwang"></i>
        <span slot="title">清洗设施</span>
      </el-menu-item>
    </el-menu>

</template>

<script>

    export default {
        props:['isCollapse'],
        data(){
        return{

          // isCollapse:false
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
@import "../assets/css/sidebar.css";
</style>
