import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Books extends BaseSchema {
  protected tableName = 'books'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.string('isbn').unique()
      table.string('author')
      table.string('publisher')
      table.integer('publication_year')
      table.integer('edition')
      table.integer('pages')
      table.string('category')
      table.integer('quantity')
      table.string('shelf_location')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
