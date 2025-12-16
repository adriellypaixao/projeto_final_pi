import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import { createUserValidator } from '#validators/user'

export default class UsersController {

  // LISTAR
  async index() {
    return await User.all()
  }

  // CRIAR
  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createUserValidator)

    const user = await User.create(data)
    return response.created(user)
  }

  // DETALHAR
  async show({ params }: HttpContext) {
    return await User.findOrFail(params.id)
  }

  // ATUALIZAR
  async update({ params, request }: HttpContext) {
    const user = await User.findOrFail(params.id)

    const data = request.only([
      'name',
      'phone',
      'address',
      'role',
      'registration',
      'course'
    ])

    user.merge(data)
    await user.save()

    return user
  }

  // EXCLUIR
  async destroy({ params, response }: HttpContext) {
    const user = await User.findOrFail(params.id)
    await user.delete()

    return response.noContent()
  }
}
