import { BookRepository } from '../repositories/book-repository'

interface CreateBookUseCaseRequest {
  title: string
  publishing_company: string
  url: string
  authors: string[]
}

export class CreateBookUseCase {
  constructor(private repository: BookRepository) {}

  async execute({
    authors,
    publishing_company,
    title,
    url,
  }: CreateBookUseCaseRequest) {
    const book = await this.repository.create({
      publishing_company,
      title,
      url,
      authors,
    })

    return {
      book,
    }
  }
}
