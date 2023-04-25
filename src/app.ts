import fastify from 'fastify'
import { globalErrorHandler } from './http/handlers/global-error'
import { routes } from './http/routes'

const app = fastify()

app.register(routes)

app.setErrorHandler(globalErrorHandler)

export { app }
