var mysql = require('promise-mysql');
var config = require('./config.js');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : config.dbUser,
  password        : config.dbPass,
  database        : 'makeup',
  connectionLimit: 10
});

module.exports = pool;
