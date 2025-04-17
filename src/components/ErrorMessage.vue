<script setup lang="ts">
const props = defineProps<{error : string}>()
</script>
<template>  
    <p class="error-color">{{ props.error }}</p>
</template>
<style scoped>
    .error-color{
        color: red;
    }
</style>