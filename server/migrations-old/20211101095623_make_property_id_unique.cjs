export default {
  up: function (knex) {
    return knex.schema.alterTable('properties', function (table) {
      table.unique('unique_id');
    });
  },

  down: function (knex) {
    return knex.schema.alterTable('properties', function (table) {
      table.dropUnique('unique_id');
    });
  },
};
