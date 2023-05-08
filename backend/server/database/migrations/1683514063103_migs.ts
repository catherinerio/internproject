import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class FormSubmissions extends BaseSchema {
  protected tableName = 'form_submissions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('phone_number').notNullable()
      table.string('email').notNullable()
      table.string('address').notNullable()
      table.string('postcode').notNullable()
      table.string('state').notNullable()
      table.json('clothing_types').notNullable()
      table.json('images').notNullable()
      table.string('description').notNullable()
      table.decimal('budget', 8, 2).nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
