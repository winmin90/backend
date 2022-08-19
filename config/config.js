require("dotenv").config();
const env = process.env;
module.exports = { 
  development: {
    username: env.mysqlname,
    password: env.mysqlpassword,
    database: env.mysqldatabase,
    host: env.mysqlhost,
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
