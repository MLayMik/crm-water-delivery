import z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email().min(1, 'Email is required'),
  password: z.string(),
})

export const AuthResponseSchema = z.object({
  token: z.string(),
  role: z.enum(['admin', 'courier', 'client']),
  name: z.string(),
  email: z.string().email(),
})

export const AddUserSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email().min(1, 'Email is required'),
  role: z.enum(['admin', 'courier', 'client']),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
})
