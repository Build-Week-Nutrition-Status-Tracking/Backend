// Update with your config settings.

// const productionConnection =
//   process.env.DATABASE_URL ||
//   `postgres://localhost/connorholly/nutrition-tracker`;

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
    }
    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run("PRAGMA foreign_keys = ON", done);
    //   }
    // }
  },
  staging: {
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
    }
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migrations"
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
