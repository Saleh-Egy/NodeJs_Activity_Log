const express = require('express');
const bodyParser= require('body-parser')
const Sequelize = require('sequelize');
const conn = require('./config/db.config');
require('dotenv').config();


// create express app
const app = express();

// Setup server port
const port = process.env.PORT;
 
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Require routes
const sellerLogRoutes = require('./src/Routes/seller_logs')
const adminLogRoutes = require('./src/Routes/admin_logs')

// using as middleware
app.use('/api/sellerLog', sellerLogRoutes)
app.use('/api/adminLog', adminLogRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
