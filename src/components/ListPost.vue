<script setup lang="ts">
import { ref, onMounted, watchEffect, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const data = ref()
const loading = ref(false)
const messageError = ref(null)
const limit = 10
const pagination = ref(Number(route.query.page || 1))

const fetchData = async () => {
  loading.value = true
  try {
    const res = await fetch(
      `https://dummyjson.com/posts?limit=${limit}&skip=${limit * pagination.value}`,
    )
    if (!res.ok) throw new Error('Failed to fetch')
    data.value = await res.json()
  } catch (error) {
    // messageError.value = error?.message ?? ''
  } finally {
    loading.value = false
  }
}

watch(pagination, (newPage) => {
  router.push({ query: { ...route.query, page: newPage.toString() } })
  fetchData()
})

onMounted(fetchData)
</script>

<template>
  <h1>Post List</h1>
  <div v-if="loading">Loading...</div>
  <div v-else v-for="item in data?.posts" :key="item.id">
    <router-link :to="{ name: 'detail', params: { id: item.id } }">
      <h2>{{ item.title }}</h2>
    </router-link>
    <p class="text-justify">{{ item.body }}</p>
  </div>
  <div class="pagination">
    <button :disabled="pagination <= 1" @click="pagination--"><</button>
    {{ pagination }}
    <button @click="pagination++">></button>
  </div>
</template>

<style>
.text-justify {
  text-align: justify;
}
.pagination {
  display: flex;
  justify-content: center;
}
</style>
