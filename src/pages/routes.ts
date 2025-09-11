import type { RouteRecordInfo, RouteRecordRaw } from 'vue-router'
import { AppLayoutsEnum } from '@/shared/lib/router/types'
import { HomePage } from './home'
import { LoginPage } from './login'

export const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: HomePage,
  },
  {
    name: 'Auth',
    path: '/auth',
    component: LoginPage,
    meta: {
      layout: AppLayoutsEnum.auth,
      requierAuth: false,
    },
  },
]

export interface RouteNamedMap {
  Home: RouteRecordInfo<'Home', '/'>
  Auth: RouteRecordInfo<'Auth', '/auth'>
}

declare module 'vue-router' {
  interface TypesConfig {
    RouteNamedMap: RouteNamedMap
  }
}
