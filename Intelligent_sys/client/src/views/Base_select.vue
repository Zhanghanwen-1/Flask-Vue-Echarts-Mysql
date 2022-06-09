<template>
  <div id="home">
    <Header></Header>
    <div class="main_box">
    <Selectbar></Selectbar>
    <Map></Map>
      </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Selectbar from "../components/Selectbar.vue";
import Map from "../components/Map.vue";
export default {
  components:{
    Header,
    Selectbar,
    Map,
  },
};
</script>

<style scoped>
@import "../assets/css/home.css";
</style>
