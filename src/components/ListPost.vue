<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    const data = ref(null)
    const loading = ref(false)
    const messageError = ref(null)
    const currentPage = ref(1)
    
    const fetchData = async () => {
        loading.value = true
        try {
            const res = await fetch('https://dummyjson.com/posts')
            if(!res.ok) throw new Error("Failed to fetch");
            data.value = await res.json()
        } catch (error) {
            messageError.value = error.message
        }finally{
            loading.value = false
        }
    }
    onMounted(fetchData)

</script>

<template>
    <h1>Post List</h1>
    <div v-if="loading">Loading...</div>
    <div v-else v-for="item in data?.posts">
        <router-link :to="{name : 'detail', params : {id : item.id}}">
            <h2>{{ item.title }}</h2>
        </router-link>
        <p class="text-justify">{{ item.body }}</p>
    </div>
    <div class="pagination">
        <button :disabled="currentPage <= 1" @click="currentPage--"> < </button>
        {{ currentPage }}
        <button @click="currentPage++"> > </button>
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