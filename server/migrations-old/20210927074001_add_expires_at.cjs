module.exports = {
  up: async (knex) => {
    return knex.schema.table('access_tokens', function (table) {
      table.datetime('expires_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    });
  },

  down: async (knex) => {
    return knex.schema.table('access_tokens', function (table) {
      table.dropColumn('expires_at');
    });
  },
};
