import { defineStore } from 'pinia'

interface IUserStore {
  token: string
  role: 'admin' | 'courier' | 'client' | ''
  isAuth: boolean
  name: string
}

export const useUserStore = defineStore('user', {
  state: (): IUserStore => ({
    token: '',
    role: '',
    isAuth: false,
    name: '',
  }),
  actions: {
    login(payload: { role: IUserStore['role'], token: string, name: string }) {
      this.token = payload.token
      this.role = payload.role
      this.isAuth = true
      this.name = payload.name
    },
    logout() {
      this.token = ''
      this.role = ''
      this.isAuth = false
      this.name = ''
    },
  },
  persist: true,
})
