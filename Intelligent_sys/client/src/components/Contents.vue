<template>
  <div class="right">
    <router-view v-slot="{ Component }">
      <component :is="Component"/>
    </router-view>
  </div>
</template>

<script>

</script>

<style scoped>
@import "../assets/css/main_box.css";
</style>
