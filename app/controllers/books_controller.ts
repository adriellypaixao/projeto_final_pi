import type { HttpContext } from '@adonisjs/core/http'
import Book from '#models/book'

export default class BooksController {
    //CRIAR
    public async store({ request, response }: HttpContext) {
  const data = request.only([
    'title',
    'isbn',
    'authors',
    'publisher',
    'publication_year',
    'edition',
    'pages',
    'category',
    'quantity',
    'location',
  ])

  const book = await Book.create(data)

  return response.created(book)
}

    //Listar e Buscar
    public async index({ request }: HttpContext) {
  const { title, author, isbn, category } = request.qs()

  const query = Book.query()

  if (title) {
    query.whereILike('title', `%${title}%`)
  }

  if (author) {
    query.whereILike('authors', `%${author}%`)
  }

  if (isbn) {
    query.where('isbn', isbn)
  }

  if (category) {
    query.whereILike('category', `%${category}%`)
  }

  return query
}

    //Buscar po id
    public async show({ params, response }: HttpContext) {
  const book = await Book.find(params.id)

  if (!book) {
    return response.notFound({ message: 'Livro não encontrado' })
  }

  return book
}

//atualizar
public async update({ params, request, response }: HttpContext) {
  const book = await Book.find(params.id)

  if (!book) {
    return response.notFound({ message: 'Livro não encontrado' })
  }

  const data = request.only([
    'title',
    'isbn',
    'authors',
    'publisher',
    'publication_year',
    'edition',
    'pages',
    'category',
    'quantity',
    'location',
  ])

  book.merge(data)
  await book.save()

  return book
}

//excluir
public async destroy({ params, response }: HttpContext) {
  const book = await Book.find(params.id)

  if (!book) {
    return response.notFound({ message: 'Livro não encontrado' })
  }

  await book.delete()

  return response.noContent()
}

}
