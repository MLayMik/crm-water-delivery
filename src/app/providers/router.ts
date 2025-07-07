import { routes } from '@/pages/routes'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => {
    return {
      top: 0,
    }
  },
})
