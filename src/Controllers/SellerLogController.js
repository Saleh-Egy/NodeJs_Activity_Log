'use strict';
// const SellerLog = require('../Models/SellerLog');
const SellerLog = require('../Models/SellerLogModel').SellerLog;


// exports.findAll = function(req, res) {
//     SellerLog.findAll(function(err, log) {
//         console.log('controller')
//         if (err)
//         res.send(err);
//         console.log('res', log);
//         res.send(log);
//     });
// };
exports.findAll = function (req, res) {
    return SellerLog
      .then((SellerLog) => res.status(200).send(SellerLog))
      .catch((error) => { res.status(400).send(error); });
};

exports.create = function(req, res) {
const new_log= new SellerLog(req.body);
//handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        SellerLog.create(new_log, function(err, log) {
        if (err)
            res.send(err);
            res.json({error:false,message:"Log added successfully!",data:log});
        });
    }
};
exports.findById = function(req, res) {
    SellerLog.findById(req.params.id, function(err, log) {
    if (err)
        res.send(err);
        res.json(log);
    });
};
exports.update = function(req, res) {
        if(req.body.constructor === Object && Object.keys(req.body).length === 0){
            res.status(400).send({ error:true, message: 'Please provide all required field' });
        }else{
            SellerLog.update(req.params.id, new SellerLog(req.body), function(err, log) {
        if (err)
            res.send(err);
            res.json({ error:false, message: 'Log successfully updated' });
        });
    }
};
exports.delete = function(req, res) {
    SellerLog.delete( req.params.id, function(err, log) {
  if (err)
        res.send(err);
        res.json({ error:false, message: 'Log successfully deleted' });
    });
};