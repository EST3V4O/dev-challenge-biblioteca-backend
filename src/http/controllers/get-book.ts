import { GetBookUseCase } from '@/core/use-cases/get-book'
import { PrismaBookRepository } from '@/database/prisma/repositories/prisma-book-repository'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getBookController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getBookParamsSchema = z.object({
    bookId: z.string().uuid(),
  })

  const { bookId } = getBookParamsSchema.parse(request.params)

  const repository = new PrismaBookRepository()
  const getBookUseCase = new GetBookUseCase(repository)

  const { book } = await getBookUseCase.execute({ bookId })

  return reply.send({
    book,
  })
}
