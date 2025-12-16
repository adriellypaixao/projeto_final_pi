import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Books extends BaseSchema {
  protected tableName = 'books'

  async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('title').notNullable()
      table.string('isbn').notNullable().unique()
      table.string('publisher')
      table.integer('publication_year')
      table.string('edition')
      table.integer('pages')
      table.string('category')

      table.integer('total_copies').notNullable()
      table.integer('available_copies').notNullable()

      table.string('shelf_location')

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down () {
    this.schema.dropTable(this.tableName)
  }
}
