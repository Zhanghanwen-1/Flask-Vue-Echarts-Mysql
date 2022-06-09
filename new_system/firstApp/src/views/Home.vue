<template>
<div class="layout">
  <Header class="header" @changeCollapse = 'changeCollapse' :isCollapse = 'isCollapse'></Header>
  <Sidebar class="sidebar" :isCollapse = 'isCollapse'></Sidebar>
  <Contents class="contents" :class="{isActive:isCollapse}"></Contents>
</div>
</template>

<script>
  import Header from "../components/Header";
  import Contents from "../components/Contents";
  import Sidebar from "../components/Sidebar";
    export default {
        components:{
          Header,
          Sidebar,
          Contents
        },
        data(){
          return{
            isCollapse: false,
          }
        },
      methods:{
          changeCollapse(){
            this.isCollapse = !this.isCollapse;
          }
      }
    }
</script>

<style scoped>
@import "../assets/css/home.css";
</style>
