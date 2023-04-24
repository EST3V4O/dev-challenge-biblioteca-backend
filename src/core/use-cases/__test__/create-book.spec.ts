import { InMemoryBookRepository } from '@/core/repositories/in-memory/in-memory-book-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateBookUseCase } from '../create-book'

let repository: InMemoryBookRepository
let sut: CreateBookUseCase

describe('Create Book Use Case', () => {
  beforeEach(() => {
    repository = new InMemoryBookRepository()
    sut = new CreateBookUseCase(repository)
  })

  it('should be able to create a new book', async () => {
    const { book } = await sut.execute({
      authors: ['John Doe'],
      publishing_company: 'My company',
      title: 'Single Programmer',
      url: 'http://localhost:3333',
    })

    expect(book.id).toEqual(expect.any(String))
  })
})
