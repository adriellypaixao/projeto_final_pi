import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare isbn: string

  @column()
  declare author: string

  @column()
  declare publisher: string

  @column()
  declare publication_year: number

  @column()
  declare edition: number
  
  @column()
  declare pages: number

  @column()
  declare category: string

  @column()
  declare quantity: number

  @column()
  declare shelf_location: string
}
