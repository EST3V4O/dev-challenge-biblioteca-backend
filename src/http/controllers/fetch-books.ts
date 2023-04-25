import { FetchBooksUseCase } from '@/core/use-cases/fetch-books'
import { PrismaBookRepository } from '@/database/prisma/repositories/prisma-book-repository'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function fetchBooksController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getBookQuerySchema = z.object({
    page: z.coerce.number().default(1),
    q: z.string().optional(),
  })

  const { page, q: query } = getBookQuerySchema.parse(request.params)

  const repository = new PrismaBookRepository()
  const fetchBooks = new FetchBooksUseCase(repository)

  const { books } = await fetchBooks.execute({ page, query })

  return reply.send({
    books,
  })
}
