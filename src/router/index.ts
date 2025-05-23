import { createRouter, createWebHistory } from 'vue-router'
import PostListView from '@/views/PostListView.vue'
import CreatePostsView from '@/views/CreatePostsView.vue'
import EditPostView from '@/views/EditPostView.vue'
import Navbar from '@/components/Navbar.vue'
import DetailPost from '@/components/DetailPost.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Navbar,
      children: [
        {
          path: '/',
          name: 'home',
          component: PostListView,
        },
        {
          path: '/post/:id',
          name: 'detail',
          component: DetailPost,
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
    },
  ],
})

export default router
