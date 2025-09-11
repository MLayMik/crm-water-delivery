import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/entities/user/model/userStore'
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

router.beforeEach(async (to) => {
  const userStore = useUserStore()
  if (to.name === 'Auth' && userStore.isAuth) {
    return { name: 'Home' }
  }

  await loadLayoutMiddleware(to)
  return true
})
