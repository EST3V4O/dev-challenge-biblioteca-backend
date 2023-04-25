import { Book, Prisma } from '@prisma/client'

export interface BookRepository {
  create(data: Prisma.BookUncheckedCreateInput): Promise<Book>
  update(id: string, data: Prisma.BookUncheckedUpdateInput): Promise<void>
  findById(id: string): Promise<Book | null>
  findMany(page: number, query?: string): Promise<Book[]>
}
