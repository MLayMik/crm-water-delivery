import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userStore = defineStore('user', () => {
  const isAuth = ref(false)

  function setIsAuth(value: boolean) {
    isAuth.value = value
  }
  return { isAuth, setIsAuth }
}, { persist: true })
