import { useMutation } from '@tanstack/vue-query'
import { loginUser } from './api'

export function useLogin() {
  return useMutation({ mutationFn: loginUser })
}
