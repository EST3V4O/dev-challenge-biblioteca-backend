import { ResourceNotFound } from '../errors/resource-not-found'
import { BookRepository } from '../repositories/book-repository'

interface UpdateBookUseCaseRequest {
  title: string
  publisher: string
  url: string
  authors: string[]
  bookId: string
}

export class UpdateBookUseCase {
  constructor(private repository: BookRepository) {}

  async execute({
    authors,
    publisher,
    title,
    url,
    bookId,
  }: UpdateBookUseCaseRequest) {
    const book = await this.repository.findById(bookId)
    if (!book) throw new ResourceNotFound()

    await this.repository.update(bookId, {
      publisher,
      title,
      url,
      authors,
    })
  }
}
