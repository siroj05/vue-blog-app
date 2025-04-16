<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const title = ref<string>('')
const desc = ref<string>('')
const loading = ref(false)
const onSubmit = async () => {
  if (title.value.length > 0 && desc.value.length > 0) {
    loading.value = true
    try {
      const res = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title.value,
          body: desc.value,
          userId: 5,
        }),
      })
      if (!res.ok) throw new Error('failed to fetch')
      router.push('/')
    } catch (error) {
    } finally {
      loading.value = false
    }
  }
}
</script>
<template>
  <div>
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
        <button :disabled="loading" class="post-btn">{{ loading ? 'Posting..' : 'Post' }}</button>
      </div>
    </form>
  </div>
</template>
<style>
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
