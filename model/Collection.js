const Model = require("objection").Model;
const Product = require("./Product");

class Collection extends Model {
  static get tableName() {
    return "collection";
  }
  static get relationMappings() {
    return {
      products: {
        relation: Model.HasManyRelation,
        modelClass: Product,
        join: {
          from: "collection.id",
          to: "products.collection_id",
        },
      },
    };
  }

  static async allCollections() {
    const result = await Collection.query().withGraphFetched("products");
    const resultWithCount = result.map(collection => {
      var o = Object.assign({}, collection);
      o["total_products"] = collection.products.length;
      return o;
    });
    return resultWithCount;
  }
}

module.exports = Collection;
