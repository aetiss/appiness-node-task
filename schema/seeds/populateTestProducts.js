const products = require("../data/products");

exports.seed = function(knex, promise) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("products").insert(products);
    });
};
