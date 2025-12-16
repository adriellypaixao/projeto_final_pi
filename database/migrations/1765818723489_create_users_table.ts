import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name').notNullable()
      table.string('cpf').notNullable().unique()
      table.string('email').notNullable().unique()
      table.string('phone')
      table.string('address')

      table
        .enum('role', ['admin', 'librarian', 'reader'])
        .notNullable()

      // Campos exclusivos do leitor
      table.string('registration')
      table.string('course')

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down () {
    this.schema.dropTable(this.tableName)
  }
}
