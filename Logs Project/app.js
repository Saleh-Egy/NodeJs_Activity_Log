const express = require('express');
const bodyParser= require('body-parser')
const Sequelize = require('sequelize');
const mongoose = require('mongoose');
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

// Require employee routes
const sellerLogRoutes = require('./src/Routes/seller_logs')
// using as middleware
app.use('/api/sellerLog', sellerLogRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
