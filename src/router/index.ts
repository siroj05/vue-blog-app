import { createRouter, createWebHistory } from 'vue-router'
import ListPost from '../components/ListPost.vue'
import DetialPostView from '@/views/DetialPostView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListPost,
    },
    {
      path: '/post/:id',
      name: 'detail',
      component: DetialPostView,
    },
  ],
})

export default router
