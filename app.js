const express = require('express');
const bodyParser= require('body-parser')
// const Sequelize = require('sequelize');
require('dotenv').config()
// const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD,{
//   host     : process.env.DB_HOST,
//   dialect: 'postgres',
// });
// const sequelize = new Sequelize(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@example.com:5432/${process.env.DB_DATABASE}`);
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

console.log(process.env.PORT)

// create express app
const app = express();

// Setup server port
const port = process.env.PORT;

 
// const sql = postgres({ ...options }) // will default to the same as psql

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Require employee routes
const sellerLogRoutes = require('./src/Routes/seller_logs')
// using as middleware
app.use('/api/sellerLog', sellerLogRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});