<template>
<div class="top">
  <div class="left-header">
    <i v-if='!isCollapse' @click="changeMenu" class="iconfont icon-right-indent"></i>
    <i v-else @click="changeMenu" class="iconfont icon-left-indent"></i>
    智慧渔业养殖管理平台</div>
    <div class="right-header">
      <i class="iconfont icon-yonghu"></i>
      <el-dropdown>
        <span style="color: white;">admin<i class="el-icon-caret-bottom"></i></span>
        <el-dropdown-menu>
          <el-dropdown-item >个人中心</el-dropdown-item>
          <el-dropdown-item >退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
</div>
</template>

<script>
    export default {
      props:['isCollapse'],
      methods:{
          changeMenu(){
            //点击切换按钮，修改父组件数据
            this.$emit('changeCollapse')
          }
      }
    }
</script>

<style lang="less" scoped>
.top {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    //height: 60px;
    background-color: #242f42;
    color: white;
    line-height: 58px;
    font-size: larger;
    i{
        font-size: 18px;
      }
    .left-header{
      float: left;
    }
    .right-header{
      float: right;
      padding-right: 50px;
    }
  }

</style>
