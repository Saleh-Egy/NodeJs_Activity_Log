'use strict';
const SellerLog = require('../Models/SellerLog');
// const {SellerLog, validateInput} = require('../Models/SellerLog');
var SellerLogController = {
    create: create,
    findAll: findAll,
    findById: findById,
    update: update,
    deleteById: deleteById
}

function findAll(req, res) {
    SellerLog.find().
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
    // const {error} = validateInput(req.body);
    // if (error) return res.status(400).send(error.details[0].message);
    const log = new SellerLog(req.body);
    log.save()
    .then((data) => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the log."
        });
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
