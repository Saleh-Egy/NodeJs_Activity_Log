'use strict';
const AdminLog = require('../Models/AdminLog');

var AdminLogController = {
    create: create,
    findAll: findAll,
    findById: findById,
}

/**
 * Show all Seller logs
 * @param {*} req 
 * @param {*} res 
 */
function findAll(req, res) {
    AdminLog.find().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

/**
 * Show Seller logs by User ID
 * @param {*} req 
 * @param {*} res 
 */
function findById(req, res) {
    AdminLog.find().
    then((data) => {
        res.send(data.filter(element => {
            if(element.userId == req.params.userId){
                return element;
            }
        }))
    })
    .catch((error) => {
        console.log(error);
    });
        
}

/**
 * Create new Seller logs
 * @param {*} req 
 * @param {*} res 
 */
function create(req, res) {
    const log = new AdminLog(req.body);
    log.save()
    .then((data) => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the log."
        });
    });
}

module.exports = AdminLogController;
