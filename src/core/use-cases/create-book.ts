import { BookRepository } from '../repositories/book-repository'

interface CreateBookUseCaseRequest {
  title: string
  publisher: string
  url: string
  authors: string[]
}

export class CreateBookUseCase {
  constructor(private repository: BookRepository) {}

  async execute({ authors, publisher, title, url }: CreateBookUseCaseRequest) {
    const book = await this.repository.create({
      publisher,
      title,
      url,
      authors,
    })

    return {
      book,
    }
  }
}
