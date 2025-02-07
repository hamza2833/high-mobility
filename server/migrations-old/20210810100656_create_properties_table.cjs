module.exports = {
  up: async (knex) => {
    return knex.schema.createTable('properties', function (table) {
      table.increments();
      table.string('unique_id');
      table.boolean('pinned');
    });
  },

  down: async (knex) => {
    return knex.schema.dropTable('properties');
  },
};
