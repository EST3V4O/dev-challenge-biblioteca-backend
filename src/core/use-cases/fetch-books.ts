import { BookRepository } from '../repositories/book-repository'

interface FetchBooksUseCaseRequest {
  page: number
  query?: string
}

export class FetchBooksUseCase {
  constructor(private repository: BookRepository) {}

  async execute({ page, query }: FetchBooksUseCaseRequest) {
    const books = await this.repository.findMany(page, query)

    return {
      books,
    }
  }
}
