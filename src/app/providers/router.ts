import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/pages/routes'
import { loadLayoutMiddleware } from '@/shared/lib/router'

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => {
    return {
      top: 0,
    }
  },
})

router.beforeEach(loadLayoutMiddleware)
