import Book from '#models/book'
import type { HttpContext } from '@adonisjs/core/http'
import { createBookValidator } from '#validators/book'

export default class BooksController {

  // LISTAR
  async index() {
    return await Book.all()
  }

  // CRIAR
  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createBookValidator)

    const book = await Book.create(data)
    return response.created(book)
  }

  // DETALHAR
  async show({ params }: HttpContext) {
    return await Book.findOrFail(params.id)
  }

  // ATUALIZAR
  async update({ params, request }: HttpContext) {
    const book = await Book.findOrFail(params.id)

    const data = request.only([
      'title',
      'publisher',
      'publicationYear',
      'edition',
      'pages',
      'category',
      'totalCopies',
      'shelfLocation'
    ])

    book.merge(data)
    await book.save()

    return book
  }

  // EXCLUIR
  async destroy({ params, response }: HttpContext) {
    const book = await Book.findOrFail(params.id)
    await book.delete()

    return response.noContent()
  }

  async search({ request }: HttpContext) {
  const { title, author, isbn, category } = request.qs()

  const query = Book.query()

  if (title) {
    query.whereILike('title', `%${title}%`)
  }

  if (isbn) {
    query.where('isbn', isbn)
  }

  if (category) {
    query.whereILike('category', `%${category}%`)
  }

  return await query
}

}
