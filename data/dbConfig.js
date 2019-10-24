// const knex = require("knex");

// const config = require("../knexfile");

// const dbEnv = process.env.DB_ENV || "development";
// const configObj = config[dbEnv];

// module.exports = knex(configObj);

const knex = require("knex");

const knexConfig = require("../knexfile");

module.exports = knex(knexConfig.development);
