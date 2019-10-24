// Update with your config settings.
// require("dotenv").config();
const pg = require("pg");
pg.defaults.ssl = true;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/users.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run("PRAGMA foreign_keys = ON", done);
    //   }
    // }
    pool: {
      min: 2,
      max: 10
    }
  },
  production: {
    client: "pg",
    useNullAsDefault: true,

    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};

// production: {
//   client: "sqlite3",
//   useNullAsDefault: true,
//   connection: {
//     filename: "./data/shouts.db3"
//   },
//   pool: {
//     afterCreate: (conn, done) => {
//       conn.run("PRAGMA foreign_keys = ON", done);
//     }
//   },
//   migrations: {
//     directory: "./data/migrations",
//     tableName: "knex_migrations"
//   },
//   seeds: {
//     directory: "./data/seeds"
//   }
// }
// };
