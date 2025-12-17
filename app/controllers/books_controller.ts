import Book from '#models/book'
import type { HttpContext } from '@adonisjs/core/http'

export default class BooksController {
  public async index({}: HttpContext) {
    return await Book.all()
  }

  public async store({ request }: HttpContext) {
    const data = request.only([
      'title', 'isbn', 'author', 'publisher', 'publication_year',
      'edition', 'pages', 'category', 'quantity', 'shelf_location'
    ])

    return await Book.create(data)
  }

  public async show({ params }: HttpContext) {
    return await Book.findOrFail(params.id)
  }

  public async update({ params, request }: HttpContext) {
    const book = await Book.findOrFail(params.id)
    const data = request.all()
    book.merge(data)
    await book.save()
    return book
  }

  public async destroy({ params }: HttpContext) {
    const book = await Book.findOrFail(params.id)
    await book.delete()
    return { message: 'Livro removido.' }
  }
  
    async search({ request }: HttpContext) {
    const term = request.input('q')
    return Book.query()
      .where('title', 'like', `%${term}%`)
      .orWhere('author', 'like', `%${term}%`)
      .orWhere('isbn', 'like', `%${term}%`)
  }
}
