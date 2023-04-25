import { CreateBookUseCase } from '@/core/use-cases/create-book'
import { PrismaBookRepository } from '@/database/prisma/repositories/prisma-book-repository'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function createBookController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createBookBodySchema = z.object({
    title: z.string(),
    publisher: z.string(),
    url: z.string().url(),
    authors: z.array(z.string()),
  })

  const { authors, publisher, title, url } = createBookBodySchema.parse(
    request.body,
  )

  const repository = new PrismaBookRepository()
  const createBookUseCase = new CreateBookUseCase(repository)

  await createBookUseCase.execute({
    authors,
    publisher,
    title,
    url,
  })

  return reply.status(201).send()
}
