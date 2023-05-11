import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'post_jobs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("name", 255).notNullable();
      table.string("phone_num", 255).notNullable();
      table.string("email", 255).notNullable();
      table.string("address", 255).notNullable();
      table.string("state", 255).notNullable();
      table.string("zip", 255).notNullable();
      table.string("type_clothing", 255).notNullable();
      table.string("description", 255).notNullable();
      table.string("budget", 255).notNullable();
      table.string("image", 255).defaultTo(null);

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
