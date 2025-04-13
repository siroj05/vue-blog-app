<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- fungsinya kaya outlet di react-router -->
  <div class="layout">
    <RouterView />
  </div>
</template>

<style scoped>
@media only screen and (max-width: 768px) {
  .layout {
    margin-inline: 50px;
  }
}
@media only screen and (min-width: 769px) {
  .layout {
    margin-inline: 300px;
  }
}
</style>
