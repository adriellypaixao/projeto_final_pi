import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  declare public id: number

  @column()
  declare public title: string

  @column()
  declare public isbn: string

  @column()
  declare public authors: string

  @column()
  declare public publisher: string

  @column()
  declare public publicationYear: number

  @column()
  declare public edition: string | null

  @column()
  declare public pages: number

  @column()
  declare public category: string

  @column()
  declare public quantity: number

  @column()
  declare public location: string

  @column.dateTime({ autoCreate: true })
  declare public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare public updatedAt: DateTime
}
