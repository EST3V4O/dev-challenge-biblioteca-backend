import { FastifyInstance } from 'fastify'
import { createBookController } from './controllers/create-book'
import { fetchBooksController } from './controllers/fetch-books'
import { getBookController } from './controllers/get-book'
import { updateBookController } from './controllers/update-book'

export async function routes(app: FastifyInstance) {
  app.post('/books', createBookController)

  app.get('/books', fetchBooksController)

  app.get('/books/:bookId', getBookController)

  app.put('/books/:bookId', updateBookController)
}
