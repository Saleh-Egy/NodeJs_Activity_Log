'use strict';
const mongoose = require('mongoose');
require('dotenv').config();

var dbConn = mongoose.connect(process.env.DATABASE_URL, {
useNewUrlParser: true
  }).then(() => {
    console.log("Successfully connected to the database");    
  }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });
 
module.exports = dbConn;