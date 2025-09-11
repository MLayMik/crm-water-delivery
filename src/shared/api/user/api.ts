import type { ApiEndpointsAndSchemas } from '../lib'
import { client } from '../lib'
import { AuthResponseSchema } from './types'

const endpoints = {
  login: {
    url: '/login',
    method: 'post',
    schema: AuthResponseSchema,
  },
} satisfies ApiEndpointsAndSchemas

export interface LoginUserParams { email: string, password: string }
export async function loginUser({ email, password }: LoginUserParams) {
  const { url, method, schema } = endpoints.login

  const data = await client[method](url, { email, password }, schema)

  return data
}
