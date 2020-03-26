exports.up = function(knex) {
  return knex.schema.createTable("products", t => {
    t.increments("id")
      .unsigned()
      .primary();
    t.string("title");
    t.string("description");
    t.integer("collection_id").references("collection.id");
    t.string("price");
    t.integer("inventory_quantity");
    t.string("status");
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("products");
};
