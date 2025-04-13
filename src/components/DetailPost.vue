<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
interface DetailPostModel {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: {
    likes: string
    dislike: string
  }
  views: number
  userId: number
}
const route = useRoute()
const postId = route.params.id
const data = ref<DetailPostModel>()
const loading = ref(false)
const fetchData = async () => {
  loading.value = true
  try {
    const res = await fetch(`https://dummyjson.com/posts/${postId}`)
    if (!res.ok) throw new Error('Failed to fetch')
    // console.log(await res.json())
    data.value = await res.json()
  } catch (error) {
  } finally {
    loading.value = false
  }
}

onMounted(fetchData)
</script>

<template>
  <div v-if="loading">Loading..</div>
  <div v-else>
    <h1>{{ data?.title }}</h1>
    <div>
      Tags :
      <span v-for="tag in data?.tags">{{ tag }},&nbsp;</span>
    </div>
    <p>{{ data?.body }}</p>
  </div>
</template>

<style></style>
