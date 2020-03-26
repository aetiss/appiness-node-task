const koa = require("koa");
const app = new koa();
const collection = require("./routes/collection");
require("./config/database");

app.use(collection.routes());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server is listing to port ${PORT}`);
});
