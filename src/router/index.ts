import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/boards',
      name: 'boards',
      component: () => import('@/views/BoardView.vue')
    },
    {
      path: '/path',
      name: 'path',
      component: () => import('@/views/BoardView.vue')
    },
    {
      path: '/trip',
      name: 'trip',
      component: () => import('@/views/BoardView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BoardView.vue')
    }
  ]
})

export default router
