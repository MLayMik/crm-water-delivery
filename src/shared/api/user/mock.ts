import type { IUser } from '@/shared/types'
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
        email,
      }, { status: 200 })
    }
    if (email === 'courier@gmail.com' && password === '123') {
      return HttpResponse.json({
        token: 'courier-token',
        role: 'courier',
        name: 'Courier',
        email,
      }, { status: 200 })
    }
    if (email === 'client@gmail.com' && password === '123') {
      return HttpResponse.json({
        token: 'client-token',
        role: 'client',
        name: 'Client',
        email,
      }, { status: 200 })
    }

    return HttpResponse.json(
      { message: 'Incorrect email or password' },
      { status: 403 },
    )
  }),

  http.post(`${API_URL}/users`, async ({ request }) => {
    const newUser = await request.json() as IUser
    const stored = localStorage.getItem('mocked-users')
    const users = stored ? JSON.parse(stored) : []

    const userWithId = { ...newUser, id: Date.now() }
    users.push(userWithId)

    localStorage.setItem('mocked-users', JSON.stringify(users))

    return HttpResponse.json(userWithId, { status: 201 })
  }),
]
