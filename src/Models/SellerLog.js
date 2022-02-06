'use strict';
const SellerLogTable = require('../Migrations/create_seller_logs_table');
var SellerLog = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    update: update
}

function findAll() {
    return SellerLogTable.findAll();
}

function findById(id) {
    return SellerLogTable.findByPk(id);
}


function create(request) {
    var record = new SellerLogTable(request);
    return record.save();
}

function deleteById(id) {
    return SellerLogTable.destroy({ where: { id: id } });
}


function update(request, id) {
    return SellerLogTable.update(request, { where: { id: id } });
}
module.exports = SellerLog;