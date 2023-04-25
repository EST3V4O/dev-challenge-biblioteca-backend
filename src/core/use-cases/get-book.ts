import { ResourceNotFound } from '../errors/resource-not-found'
import { BookRepository } from '../repositories/book-repository'

interface GetBookUseCaseRequest {
  bookId: string
}

export class GetBookUseCase {
  constructor(private repository: BookRepository) {}

  async execute({ bookId }: GetBookUseCaseRequest) {
    const book = await this.repository.findById(bookId)
    if (!book) throw new ResourceNotFound()

    return {
      book,
    }
  }
}
