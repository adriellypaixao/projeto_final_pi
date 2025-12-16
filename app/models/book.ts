import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare isbn: string

  @column()
  declare publisher: string

  @column()
  declare publicationYear: number

  @column()
  declare edition: string

  @column()
  declare pages: number

  @column()
  declare category: string

  @column()
  declare totalCopies: number

  @column()
  declare availableCopies: number

  @column()
  declare shelfLocation: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
