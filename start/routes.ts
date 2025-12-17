import router from '@adonisjs/core/services/router'
import BooksController from '#controllers/books_controller'
import UsersController from '#controllers/users_controller'

router.resource('users', UsersController).apiOnly()

router.group(() => {
  router.post('/books', [BooksController, 'store'])
  router.get('/books', [BooksController, 'index'])
  router.get('/books/:id', [BooksController, 'show'])
  router.put('/books/:id', [BooksController, 'update'])
  router.delete('/books/:id', [BooksController, 'destroy'])
})
