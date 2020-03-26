exports.up = function(knex) {
  return knex.schema.createTable("collection", t => {
    t.increments("id")
      .unsigned()
      .primary();
    t.string("title");
    t.string("description");
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("collection");
};
