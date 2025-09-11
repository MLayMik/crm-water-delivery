import z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email().min(1, 'Email is required'),
  password: z.string(),
})

export const AuthResponseSchema = z.object({
  token: z.string(),
  role: z.enum(['admin', 'courier', 'client']),
  name: z.string(),
})
