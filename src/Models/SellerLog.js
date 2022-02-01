'use strict';
var dbConn = require('../../config/db.config');
//SellerLog object create
var SellerLog = function(sellerLog){
  this.method     = sellerLog.method;
  this.url      = sellerLog.url;
  this.body          = sellerLog.body;
  this.user_id          = sellerLog.user_id;
  this.created_at     = new Date();
  this.updated_at     = new Date();
};

SellerLog.create = function (newLog, result) {
  dbConn.query("INSERT INTO seller_logs set ?", newLog, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

SellerLog.findById = function (id, result) {
  dbConn.query("Select * from seller_logs where id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
  });
};

SellerLog.findAll = function (result) {
  dbConn.query("Select * from seller_logs", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('seller_logs : ', res);
      result(null, res);
    }
  });
};

SellerLog.update = function(id, sellerLog, result){
  dbConn.query("UPDATE seller_logs SET method=?,url=?,body=?,user_id=? WHERE id = ?", 
  [sellerLog.method,sellerLog.url,sellerLog.body,sellerLog.user_id, id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
  });
};

SellerLog.delete = function(id, result){
  dbConn.query("DELETE FROM seller_logs WHERE id = ?", [id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
    }
  });
};
module.exports= SellerLog;