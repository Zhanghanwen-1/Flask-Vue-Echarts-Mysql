<template>
  <div class="left">
    <div class="sidebar">
  <b-navbar class="navbar" toggleable type="dark" variant="dark">
    <b-navbar-brand href="#">基地选择</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{ path: '/overview' }">桃花岛养殖基地</b-nav-item>
        <b-nav-item :to="{ path: '/overview' }">嵊泗县养殖基地</b-nav-item>
        <b-nav-item :to="{ path: '/overview' }">东极岛养殖基地</b-nav-item>


      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
@import "../assets/css/main_box.css";
</style>
