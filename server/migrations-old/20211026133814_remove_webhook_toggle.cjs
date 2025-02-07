module.exports = {
  up: function (knex) {
    return knex.schema.alterTable('config', function (table) {
      table.dropColumn('continuous_database_logging');
    });
  },

  down: function (knex) {
    return knex.schema.alterTable('config', function (table) {
      table.boolean('continuous_database_logging').defaultTo(false);
    });
  },
};
