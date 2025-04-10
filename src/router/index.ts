import { createRouter, createWebHistory } from 'vue-router'
import ListPost from '../components/ListPost.vue'
import DetailPost from '../components/DetailPost.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListPost,
    },
    {
      path : '/post/:id',
      name : 'detail',
      component : DetailPost
    }
  ],
})

export default router
