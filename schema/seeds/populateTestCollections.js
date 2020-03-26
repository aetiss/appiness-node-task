const collections = require("../data/collections");

exports.seed = function(knex, promise) {
  // Deletes ALL existing entries
  return knex("collection")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("collection").insert(collections);
    });
};
