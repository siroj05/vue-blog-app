import { getPosts } from '@/api/post'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

export const usePosts = () => {
  const route = useRoute()
  const limit = 10

  const loading = ref(false)
  const success = ref(false)
  const data = ref()
  const error = ref('')
  watchEffect(async () => {
    loading.value = true
    const skip = Number(route.query.page || 0)
    const q = route.query.q?.toString() || ''
    try {
      success.value = false
      const res = await getPosts({ limit, skip, q })
      data.value = res
      success.value = true
    } catch (err: any) {
      error.value = err.message
      success.value = false
    } finally {
      loading.value = false
    }
  })

  return {
    data,
    loading,
    error,
    success,
  }
}
