'use strict';
const SellerLog = require('../Models/SellerLog');
var SellerLogController = {
    create: create,
    findAll: findAll,
    findById: findById,
    update: update,
    deleteById: deleteById
}

function findAll(req, res) {
    SellerLog.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}
function findById(req, res) {
    SellerLog.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function create(req, res) {
    let request = req.body;
    SellerLog.create(request).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function update(req, res) {
    SellerLog.update(req.body, req.params.id).
    then((data) => {
        res.status(200).json({
            message: "Record updated successfully",
            record: data
        })
    })
    .catch((error) => {
        console.log(error);
    });
}
function deleteById(req, res) {
    SellerLog.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Record deleted successfully",
                record: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}
module.exports = SellerLogController;
