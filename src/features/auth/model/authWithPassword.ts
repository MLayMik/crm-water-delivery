import type { ILoginForm } from '@/shared/types'
import { supabase } from '@/shared/api/supabase-client'

export async function authWithPassword({ email, password }: ILoginForm) {
  const {
    data,
    error,
  } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    throw new Error(error.message)
  }
  return data
}
