module.exports = {
  up: async (knex) => {
    return knex.schema.alterTable('app_config', function (table) {
      table.json('fleet_api_config');
      table.string('app_type', 1000);
    });
  },

  down: async (knex) => {
    return knex.schema.alterTable('app_config', function (table) {
      table.dropColumn('fleet_api_config');
      table.dropColumn('app_type');
    });
  },
};
