'use strict';
// const mysql = require('mysql');
//local mysql db connection
// const dbConn = mysql.createConnection({
//   host     : process.env.DB_HOST,
//   user     : process.env.DB_USERNAME,
//   password : process.env.DB_PASSWORD,
//   database : process.env.DB_DATABASE,
// });

// dbConn.connect(function(err) {
//     if (err) throw err;
//     console.log("Database Connected!");
// });
const Sequelize = require('sequelize');

const dbConn = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD,{
  host     : process.env.DB_HOST,
  dialect: 'postgres',
});
dbConn
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
module.exports = dbConn;