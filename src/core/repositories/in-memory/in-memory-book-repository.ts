import { BookRepository } from '@/core/repositories/book-repository'
import { Book, Prisma } from '@prisma/client'
import { randomUUID } from 'node:crypto'

export class InMemoryBookRepository implements BookRepository {
  items: Book[] = []

  async findById(id: string): Promise<Book | null> {
    const book = this.items.find((book) => book.id === id)
    if (!book) return null

    return book
  }

  async findMany(page: number, query?: string | undefined): Promise<Book[]> {
    const books = this.items
      .filter((item) => (query ? item.title.includes(query) : true))
      .slice((page - 1) * 10, page * 10)

    return books
  }

  async create(data: Prisma.BookUncheckedCreateInput): Promise<Book> {
    const book: Book = {
      authors: data.authors as string[],
      id: randomUUID(),
      publisher: data.publisher,
      title: data.title,
      url: data.url,
    }

    this.items.push(book)

    return book
  }

  async update(
    id: string,
    data: Prisma.BookUncheckedUpdateInput,
  ): Promise<void> {
    const index = this.items.findIndex((book) => book.id === id)
    if (index < 0) return

    const book = this.items[index]

    this.items[index] = {
      ...book,
      ...(data as any),
    }
  }
}
