import type { VueElement } from 'vue'

export enum AppLayoutsEnum {
  default = 'default',
  auth = 'auth',
}

export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
  default: 'DefaultLayout.vue',
  auth: 'AuthLayout.vue',
}

declare module 'vue-router' {
  interface RouteMeta {
    layout?: AppLayoutsEnum
    layoutComponent?: VueElement
  }
}
