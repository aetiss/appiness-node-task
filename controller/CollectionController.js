const Collections = require("../model/Collection");

class CollectionController {
  constructor(ctx) {
    this.ctx = ctx;
  }
  async getCollections() {
    try {
      let collections = Collections.allCollections();
      return collections;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = CollectionController;
