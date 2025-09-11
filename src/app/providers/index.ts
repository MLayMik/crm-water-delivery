import type { App } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'

import { ENVIRONMENT } from '@/shared/config'
import { router } from './router'

const pinia = createPinia()
pinia.use(piniaPersist)

async function enableMocking() {
  if (ENVIRONMENT !== 'development') {
    return
  }

  const { worker } = await import('@/shared/lib/utils/worker')

  return worker.start()
}

export function applyProviders(app: App) {
  app.use(VueQueryPlugin)
  app.use(pinia)
  app.use(router)
  app.use(enableMocking)
}
