'use strict';
const mongoose = require('mongoose');

const AdminLogSchema = new mongoose.Schema({
    method: String,
    serviceId:Number,
    url: String,
    body:Object,
    userId:Number,
    name : String,
    sector_log : String, //{Product - Reservation}
    Sector_data : Object, //{id,product_id,service_id}
}, {
    timestamps: true
});

module.exports = mongoose.model('AdminLog', AdminLogSchema);