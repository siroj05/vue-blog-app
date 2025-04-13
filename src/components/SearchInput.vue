<script setup lang="ts">
defineProps<{ search: string }>()
const emit = defineEmits<{
  (e: 'update:search', value: string): void
  (e: 'onSubmit'): void
}>()
</script>

<template>
  <form v-on:submit.prevent="emit('onSubmit')">
    <input
      type="text"
      :value="search"
      @input="emit(`update:search`, ($event.target as HTMLInputElement).value)"
      placeholder="Search..."
      name=""
      id=""
    />
    <button>Search</button>
  </form>
</template>

<style></style>
