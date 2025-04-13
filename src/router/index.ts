import { createRouter, createWebHistory } from 'vue-router'
import ListPost from '../components/ListPost.vue'
import DetialPostView from '@/views/DetialPostView.vue'
import PostListView from '@/views/PostListView.vue'
import CreatePostsView from '@/views/CreatePostsView.vue'
import EditPostView from '@/views/EditPostView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PostListView,
    },
    {
      path: '/post/:id',
      name: 'detail',
      component: DetialPostView,
    },
    {
      path: '/post/add',
      name: 'create',
      component: CreatePostsView,
    },
    {
      path: '/post/:id/edit',
      name: 'edit',
      component: EditPostView,
    },
  ],
})

export default router
