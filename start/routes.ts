import BooksController from '#controllers/books_controller'
import router from '@adonisjs/core/services/router'

router.resource('books', BooksController)
router.get('books/search', [BooksController, 'search'])
