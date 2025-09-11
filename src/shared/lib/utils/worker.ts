import { setupWorker } from 'msw/browser'
import { handlers } from '@/shared/api/handlers'

export const worker = setupWorker(...handlers)
