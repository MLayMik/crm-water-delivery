import { http, HttpResponse } from 'msw'
import { API_URL } from '@/shared/config'
import { supabase } from '../supabase-client'

export const userhandlers = [
  http.post(`${API_URL}/login`, async ({ request }) => {
    const { email, password } = await request.json() as
         { email: string, password: string }

    const { data, error } = await supabase
      .from('admins')
      .select()
      .eq('email', email)
      .eq('password', password)
      .single()

    if (error && !data) {
      return HttpResponse.json(
        { message: error.message },
        { status: 401 },
      )
    }
    return HttpResponse.json(
      { message: 'Login successful' },
      { status: 200 },
    )
  }),

]
