import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Books extends BaseSchema {
  protected tableName = 'books'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('title').notNullable()
      table.string('isbn').notNullable().unique()
      table.string('authors').notNullable()
      table.string('publisher').notNullable()

      table.integer('publication_year').notNullable()
      table.string('edition').nullable()
      table.integer('pages').notNullable()

      table.string('category').notNullable()
      table.integer('quantity').notNullable()
      table.string('location').notNullable()

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
