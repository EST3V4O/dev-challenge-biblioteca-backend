import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'

export async function globalErrorHandler(
  error: FastifyError,
  _: FastifyRequest,
  reply: FastifyReply,
) {
  if (error instanceof ZodError) {
    return reply.status(404).send({
      message: 'Validation error',
      issues: error.format(),
    })
  }

  return reply.status(500).send({ message: 'Internal serer error.' })
}
