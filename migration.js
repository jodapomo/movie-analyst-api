// Get our dependencies
require('dotenv').config();
const mysql = require("mysql");
var migration = require('mysql-migrations');
const env = require('./env');

const connectionPool = mysql.createPool({
  connectionLimit : 1,
  host     : env.MYSQL_HOST,
  port     : env.MYSQL_PORT,
  user     : env.MYSQL_USER,
  password : env.MYSQL_PASSWORD,
  database : env.MYSQL_DB_NAME,
});


migration.init(connectionPool, __dirname + '/migrations', function() {
  console.log("Finished running migrations.");
});
