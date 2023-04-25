import { UpdateBookUseCase } from '@/core/use-cases/update-book'
import { PrismaBookRepository } from '@/database/prisma/repositories/prisma-book-repository'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function updateBookController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const updateBookParamsSchema = z.object({
    bookId: z.string().uuid(),
  })

  const { bookId } = updateBookParamsSchema.parse(request.params)

  const updateBookBodySchema = z.object({
    title: z.string(),
    publisher: z.string(),
    url: z.string().url(),
    authors: z.array(z.string()),
  })

  const { authors, publisher, title, url } = updateBookBodySchema.parse(
    request.body,
  )

  const repository = new PrismaBookRepository()
  const updateBookUseCase = new UpdateBookUseCase(repository)

  await updateBookUseCase.execute({
    authors,
    publisher,
    title,
    url,
    bookId,
  })

  return reply.status(204).send()
}
