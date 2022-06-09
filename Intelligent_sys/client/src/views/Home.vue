<template>
  <div id="home">
  <Header></Header>
    <div class="main_box">
      <Sidebar></Sidebar>
      <Contents></Contents>
      </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Contents from "../components/Contents.vue";
import Sidebar from "../components/Sidebar.vue";
export default {
  components:{
    Header,
    Sidebar,
    Contents,
  },
};
</script>

<style scoped>
@import "../assets/css/home.css";
</style>
