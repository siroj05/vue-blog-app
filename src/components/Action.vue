<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{ id: number }>()
const isActionOpen = ref(false)
const action = () => {
  isActionOpen.value = !isActionOpen.value
}
</script>
<template>
  <div class="btn-acton">
    <button @click="action">Action</button>
    <div v-if="isActionOpen" class="action-list">
      <RouterLink :to="{ name: 'edit', params: { id: id } }">Edit</RouterLink>
      <div>Delete</div>
    </div>
  </div>
</template>

<style>
.action-list {
  position: absolute;
  background-color: antiquewhite;
  padding: 10px;
  width: 50px;
}
.btn-acton {
  margin-top: auto;
  margin-bottom: auto;
  position: relative;
}
</style>
