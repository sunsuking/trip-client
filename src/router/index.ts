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
      path: '/notice',
      name: 'notice',
      component: () => import('@/views/NoticeView.vue')
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
      component: () => import('@/callback/OAuthRedirect.vue')
    },
    {
      path: "/confirm/email",
      name: "confirm-email",
      component: () => import('@/callback/ConfirmEmail.vue')
    }
  ]
})

export default router
