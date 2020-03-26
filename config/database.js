const knex = require("knex");
const knexDb = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "test",
    password: process.env.DB_PASSWORD || "test",
    database: process.env.DB_NAME || "test",
    port: process.env.DB_PORT || 5432,
    insecureAuth: true,
  },
  pool: { min: 0, max: 100 },
});

const { Model } = require("objection");
Model.knex(knexDb);
