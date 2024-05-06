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
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('@/views/SignInView.vue')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('@/views/CommunityView.vue')
    },
    {
      path: '/path',
      name: 'path',
      component: () => import('@/views/CommunityView.vue')
    },
    {
      path: '/trip',
      name: 'trip',
      component: () => import('@/views/CommunityView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/CommunityView.vue')
    },
    {
      path: "/oauth2/redirect",
      name: "oauth2-redirect",
      component: () => import('@/views/OAuthRedirectView.vue')
    }
  ]
})

export default router
