import { defineStore } from 'pinia'

interface IUserStore {
  token: string
  role: 'admin' | 'courier' | 'client' | ''
  isAuth: boolean
}

export const useUserStore = defineStore('user', {
  state: (): IUserStore => ({
    token: '',
    role: '',
    isAuth: false,
  }),
  actions: {
    login(payload: { role: IUserStore['role'], token: string }) {
      this.token = payload.token
      this.role = payload.role
      this.isAuth = true
    },
    logout() {
      this.token = ''
      this.role = ''
      this.isAuth = false
    },
  },
  persist: true,
})
