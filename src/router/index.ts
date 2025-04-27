import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('@/views/Explore.vue'),
    },
    {
      path: '/castle/create',
      name: 'createCastle',
      component: () => import('@/views/CreateCastle.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
    }
  ],
})

export default router
