import { ResourceNotFound } from '@/core/errors/resource-not-found'
import { InMemoryBookRepository } from '@/core/repositories/in-memory/in-memory-book-repository'
import { randomUUID } from 'node:crypto'
import { beforeEach, describe, expect, it } from 'vitest'
import { GetBookUseCase } from '../get-book'

let repository: InMemoryBookRepository
let sut: GetBookUseCase

const data = {
  id: randomUUID(),
  authors: ['John Doe'],
  publishing_company: 'My company',
  title: 'Single Programmer',
  url: 'http://localhost:3333',
}

describe('Get Book Use Case', () => {
  beforeEach(() => {
    repository = new InMemoryBookRepository()
    sut = new GetBookUseCase(repository)

    repository.items.push(data)
  })

  it('should be able to get a book', async () => {
    const { book } = await sut.execute({ bookId: data.id })

    expect(book.id).toEqual(data.id)
  })

  it('should not be able to get a book if not exists', async () => {
    await expect(sut.execute({ bookId: 'wrong-id' })).rejects.toBeInstanceOf(
      ResourceNotFound,
    )
  })
})
