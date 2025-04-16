<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const title = ref<string>('')
const desc = ref<string>('')
const loading = ref<boolean>(false)
const submiting = ref<boolean>(false)
const route = useRoute()
const router = useRouter()
const postId = route.params.id
onMounted(async () => {
  loading.value = true
  try {
    const res = await fetch(`https://dummyjson.com/posts/${postId}`)
    const data = await res.json()
    title.value = data.title
    desc.value = data.body
  } catch (error) {
    loading.value = false
    throw new Error(error)
  } finally {
    loading.value = false
  }
})

const onSubmit = async () => {
  submiting.value = true
  try {
    const res = await fetch(`https://dummyjson.com/posts/${postId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title.value,
        body: desc.value,
      }),
    })
    console.log(await res.json())
  } catch (error) {
    submiting.value = false
    throw new Error(error)
  } finally {
    submiting.value = false
    router.push('/')
  }
}
</script>
<template>
  <h1>Edit Post</h1>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <form action="" class="form-layout" v-on:submit.prevent="onSubmit">
      <div class="form-input">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" v-model="title" required />
      </div>
      <div class="form-input">
        <label for="desc">Description</label>
        <textarea id="desc" name="desc" type="text" v-model="desc" required />
      </div>
      <div class="position-btn">
        <button :disabled="submiting" class="post-btn">
          {{ submiting ? 'Posting..' : 'Post' }}
        </button>
      </div>
    </form>
  </div>
</template>
<style scoped>
.form-input {
  display: flex;
  flex-direction: column;
}
.form-layout {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50vw;
}
.post-btn {
  width: 100px;
  padding: 5px;
  border-radius: 3px;
  background-color: green;
  color: white;
  border: none;
}

.position-btn {
  display: flex;
  justify-content: end;
}
</style>
