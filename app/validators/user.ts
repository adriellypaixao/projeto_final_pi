import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(3),
    cpf: vine.string().minLength(11).maxLength(11),
    email: vine.string().email(),
    phone: vine.string().optional(),
    address: vine.string().optional(),
    role: vine.enum(['admin', 'librarian', 'reader']),
    registration: vine.string().optional(),
    course: vine.string().optional(),
  })
)
