<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- fungsinya kaya outlet di react-router -->
  <div class="layout">
    <RouterView />
  </div>
</template>

<style scoped>
  .layout{
    margin-inline: 10rem;
  }
</style>
