import router from '@adonisjs/core/services/router'
import UsersController from '#controllers/users_controller'

router.resource('users', UsersController).apiOnly()