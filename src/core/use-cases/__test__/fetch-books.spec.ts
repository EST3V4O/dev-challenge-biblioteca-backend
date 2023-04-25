import { InMemoryBookRepository } from '@/core/repositories/in-memory/in-memory-book-repository'
import { randomUUID } from 'node:crypto'
import { beforeEach, describe, expect, it } from 'vitest'
import { FetchBooksUseCase } from '../fetch-books'

let repository: InMemoryBookRepository
let sut: FetchBooksUseCase

describe('Fetch Books Use Case', () => {
  beforeEach(() => {
    repository = new InMemoryBookRepository()
    sut = new FetchBooksUseCase(repository)

    for (let i = 0; i <= 30; i++) {
      const data = {
        id: randomUUID(),
        authors: ['John Doe'],
        publishing_company: 'My company',
        title: 'Single Programmer',
        url: 'http://localhost:3333',
      }

      repository.items.push(data)
    }

    repository.items.push({
      id: randomUUID(),
      authors: ['John Doe'],
      publishing_company: 'My company',
      title: 'Query',
      url: 'http://localhost:3333',
    })
  })

  it('should be able to fetch books', async () => {
    const { books } = await sut.execute({ page: 1 })

    expect(books).toHaveLength(10)
    expect(books).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: expect.any(String) }),
      ]),
    )
  })

  it('should be able to fetch books with query', async () => {
    const { books } = await sut.execute({ page: 1, query: 'Query' })

    expect(books).toHaveLength(1)
    expect(books).toEqual(
      expect.arrayContaining([expect.objectContaining({ title: 'Query' })]),
    )
  })
})
