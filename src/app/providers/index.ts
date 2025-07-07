import type { App } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import piniaPersist from 'pinia-plugin-persistedstate'

import { router } from './router'

const pinia = createPinia()
pinia.use(piniaPersist)

export function applyProviders(app: App) {
  app.use(VueQueryPlugin)
  app.use(pinia)
  app.use(router)
}