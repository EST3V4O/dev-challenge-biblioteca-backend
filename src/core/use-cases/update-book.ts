import { ResourceNotFound } from '../errors/resource-not-found'
import { BookRepository } from '../repositories/book-repository'

interface UpdateBookUseCaseRequest {
  title: string
  publishing_company: string
  url: string
  authors: string[]
  bookId: string
}

export class UpdateBookUseCase {
  constructor(private repository: BookRepository) {}

  async execute({
    authors,
    publishing_company,
    title,
    url,
    bookId,
  }: UpdateBookUseCaseRequest) {
    const book = await this.repository.findById(bookId)
    if (!book) throw new ResourceNotFound()

    await this.repository.update(bookId, {
      publishing_company,
      title,
      url,
      authors,
    })
  }
}
