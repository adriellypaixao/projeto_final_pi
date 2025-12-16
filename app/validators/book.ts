import vine from '@vinejs/vine'

export const createBookValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(2),
    isbn: vine.string(),
    publisher: vine.string().optional(),
    publicationYear: vine.number().optional(),
    edition: vine.string().optional(),
    pages: vine.number().optional(),
    category: vine.string().optional(),
    totalCopies: vine.number().min(1),
    shelfLocation: vine.string().optional(),
  })
)
