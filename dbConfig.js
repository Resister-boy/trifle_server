const fs = require('fs');

const data = fs.readFileSync('./database.json');
const config = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  port: config.port,
  database: config.database
});

connection.connect();

module.exports = connection;