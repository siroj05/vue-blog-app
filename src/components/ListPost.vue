<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SearchInput from './SearchInput.vue'
import Action from './Action.vue'
import { usePosts } from '@/composable/usePosts'
import ErrorMessage from './ErrorMessage.vue'
const route = useRoute()
const router = useRouter()
const pagination = ref(Number(route.query.page || 1))
const search = ref(route.query.q?.toString() || '')

const {data, loading, error, success} = usePosts()

watch(pagination, (newVal) => {
  router.push({ query: { ...route.query, page: newVal.toString(), q : search.value } })
})

const onSubmit = () => {
  router.push({ query: { ...route.query, page: 1, q: search.value } })
  pagination.value = 1
}
</script>

<template>
  <div class="action-layout">
    <SearchInput v-model:search="search" @onSubmit="onSubmit" />
    <RouterLink to="/post/add">
      <button>Create</button>
    </RouterLink>
  </div>
  <div v-if="success">
    <div v-if="loading">Loading...</div>
    <div v-else v-for="item in data?.posts" :key="item.id">
      <div class="action-post">
        <router-link :to="{ name: 'detail', params: { id: item.id } }">
          <h2>{{ item.title }}</h2>
        </router-link>
        <Action :id="item.id" />
      </div>
      <p class="text-justify">{{ item.body }}</p>
    </div>
    <div class="pagination">
      <button :disabled="pagination <= 1" @click="pagination--"><</button>
      {{ pagination }}
      <button :disabled="pagination == data?.posts?.length" @click="pagination++">></button>
    </div>
  </div>
  <div v-else>
    <ErrorMessage :error="error" />
  </div>
</template>

<style>
.action-post {
  display: flex;
  justify-content: space-between;
}
.action-layout {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
.text-justify {
  text-align: justify;
}
.pagination {
  display: flex;
  justify-content: center;
}
</style>
