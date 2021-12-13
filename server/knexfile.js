require("dotenv").config();
const path = require("path")

const {
  DATABASE_URL = "postgres://snmwjsei:ZNU9MrpnM2sbZT4JGvoRGazb620OjjsX@kashin.db.elephantsql.com/snmwjsei",
} = process.env;

module.exports = {

  development: {
    client: 'postgresql',
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: 'postgresql',
    connection: DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  }

};
