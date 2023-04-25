import { BookRepository } from '@/core/repositories/book-repository'
import { Book, Prisma } from '@prisma/client'
import { prisma } from '../client'

export class PrismaBookRepository implements BookRepository {
  async create(data: Prisma.BookUncheckedCreateInput): Promise<Book> {
    const book = await prisma.book.create({
      data,
    })

    return book
  }

  async update(
    id: string,
    data: Prisma.BookUncheckedUpdateInput,
  ): Promise<void> {
    await prisma.book.update({
      data,
      where: { id },
    })
  }

  async findById(id: string): Promise<Book | null> {
    const book = await prisma.book.findUnique({
      where: { id },
    })

    return book
  }

  async findMany(page: number, query?: string | undefined): Promise<Book[]> {
    const books = await prisma.book.findMany({
      where: {
        title: {
          contains: query,
        },
      },
      take: 20,
      skip: (page - 1) * page,
    })

    return books
  }
}
