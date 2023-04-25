import { ResourceNotFound } from '@/core/errors/resource-not-found'
import { InMemoryBookRepository } from '@/core/repositories/in-memory/in-memory-book-repository'
import { Book } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import { beforeEach, describe, expect, it } from 'vitest'
import { UpdateBookUseCase } from '../update-book'

let repository: InMemoryBookRepository
let sut: UpdateBookUseCase

const data = {
  id: randomUUID(),
  authors: ['John Doe'],
  publisher: 'My company',
  title: 'Single Programmer',
  url: 'http://localhost:3333',
}

describe('Update Book Use Case', () => {
  beforeEach(() => {
    repository = new InMemoryBookRepository()
    sut = new UpdateBookUseCase(repository)

    repository.items.push(data)
  })

  it('should be able to update a book', async () => {
    const newData = {
      title: 'Two programmers',
    }

    await sut.execute({
      authors: data.authors,
      publisher: data.publisher,
      url: data.url,
      title: newData.title,
      bookId: data.id,
    })

    const book = repository.items.at(-1) as Book

    expect(book.title).toEqual(newData.title)
  })

  it('should not be able to update a book if not exists', async () => {
    await expect(
      sut.execute({
        authors: data.authors,
        publisher: data.publisher,
        url: data.url,
        title: data.title,
        bookId: 'wrong-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFound)
  })
})
