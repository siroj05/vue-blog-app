<script setup lang="ts">
import { ref, watchEffect, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SearchInput from './SearchInput.vue'
const route = useRoute()
const router = useRouter()
const data = ref()
const loading = ref(false)
const messageError = ref(null)
const limit = 10
const pagination = ref(Number(route.query.page || 1))
const search = ref(route.query.q || '')

watchEffect(() => {
  const fetchData = async () => {
    loading.value = true
    try {
      const res = await fetch(
        `https://dummyjson.com/posts/search?limit=${limit}&skip=${limit * Number(route.query.page || 1) - limit}&q=${route.query.q || ''}`,
      )
      if (!res.ok) throw new Error('Failed to fetch')
      data.value = await res.json()
    } catch (error: any) {
      messageError.value = error?.message ?? ''
    } finally {
      loading.value = false
    }
  }
  fetchData()
})

watch(pagination, (newVal) => {
  router.push({ query: { ...route.query, page: newVal.toString() } })
})

const onSubmit = () => {
  router.push({ query: { ...route.query, page: 1, q: search.value } })
  pagination.value = 1
}
</script>

<template>
  <div class="action-layout">
    <SearchInput v-model:search="search" @onSubmit="onSubmit" />
    <button>Create</button>
  </div>
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
    <button :disabled="pagination == data?.posts?.length" @click="pagination++">></button>
  </div>
</template>

<style>
.action-layout {
  display: flex;
  justify-content: space-between;
}
.text-justify {
  text-align: justify;
}
.pagination {
  display: flex;
  justify-content: center;
}
</style>
