import { http, HttpResponse } from 'msw'
import { API_URL } from '@/shared/config'

export const userhandlers = [
  http.post(`${API_URL}/login`, async ({ request }) => {
    const { email, password } = await request.json() as
         { email: string, password: string }

    if (email === 'admin@gmail.com' && password === '123') {
      return HttpResponse.json({
        token: 'admin-token',
        role: 'admin',
        name: 'Admin',
      }, { status: 200 })
    }
    if (email === 'courier@gmail.com' && password === '123') {
      return HttpResponse.json({
        token: 'courier-token',
        role: 'courier',
        name: 'Courier',
      }, { status: 200 })
    }
    if (email === 'client@gmail.com' && password === '123') {
      return HttpResponse.json({
        token: 'client-token',
        role: 'client',
        name: 'Client',
      }, { status: 200 })
    }

    return HttpResponse.json(
      { message: 'Incorrect email or password' },
      { status: 403 },
    )
  }),
]
