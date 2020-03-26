const Model = require("objection").Model;
class Product extends Model {
  static get tableName() {
    return "products";
  }
}
module.exports = Product;
