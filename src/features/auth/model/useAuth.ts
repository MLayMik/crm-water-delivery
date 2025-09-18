import { useMutation } from '@tanstack/vue-query'
import { useUserStore } from '@/entities/user/model/userStore'
import { loginUser } from '@/shared/api/user/api'

export function useAuth() {
  const userStore = useUserStore()

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      userStore.login({ user: data })
    },
  })
}
