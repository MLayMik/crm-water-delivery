import { HomePage } from './home'
import { LoginPage } from './login'

export const routes = [
  {
    name: 'Home',
    path: '/',
    component: HomePage,
  },
  {
    name: 'Login',
    path: '/auth',
    component: LoginPage
  }
]
