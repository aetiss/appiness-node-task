const koaRouter = require("koa-router");
const CollectionController = require("../controller/CollectionController");

const router = new koaRouter();

router.get("/collections", async (ctx, next) => {
  try {
    let collectionController = new CollectionController(ctx);
    var result = await collectionController.getCollections();
    console.log("collectionController::", result);
    ctx.body = {
      data: result,
      success: true,
    };
    ctx.res.statusCode = 200;
  } catch (error) {
    console.log("error", error);
    ctx.body = { data: error.message, success: false };
    ctx.res.statusCode = 503;
  }
  next();
});

module.exports = router;
