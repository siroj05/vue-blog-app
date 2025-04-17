import type { paramsModel } from '@/types/post'
const BASE_URL = 'https://dummyjson.com/posts'
export const getPosts = async (params: paramsModel) => {
  const { limit, skip, q } = params
  const res = await fetch(
    `${BASE_URL}/search?limit=${limit}&skip=${limit * skip - limit}&q=${q || ''}`,
  )
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}

export const getSinglePost = async (id: string) => {
  const res = await fetch(`${BASE_URL}/${id}`)
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}
