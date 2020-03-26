require("dotenv").config();
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "test",
      password: process.env.DB_PASSWORD || "test",
      database: process.env.DB_NAME || "test",
      port: process.env.DB_PORT || 5432,
      insecureAuth: true,
    },
    debug: true,
    seeds: {
      directory: "./schema/seeds",
    },
    migrations: {
      directory: "./schema/migrations",
    },
  },
};
