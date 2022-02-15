'use strict';
const mongoose = require('mongoose');
const Joi = require('joi');

const SellerLogSchema = new mongoose.Schema({
    method: String,
    serviceId:Number,
    url: String,
    user_id:Number,
    body:Object,
    id:Number,
    name : String,
    sector_log : String, //{Product - Reservation}
    Sector_data : Object, //{id,product_id,service_id}
}, {
    timestamps: true
});

// function validateInput(exception) {
//     const schema = Joi.object({
//         method: Joi.string().required(),
//         serviceId:Joi.number(),
//         url: Joi.string().required(),
//         user_id: Joi.string(),
//         body: Joi.object(),
//         id:Joi.number(),
//         name: Joi.string(),
//         sector_log: Joi.object(),
//         Sector_data: Joi.object(),
//     })
//     return schema.validate(exception);
// }

// module.exports.validateInput = validateInput;
module.exports = mongoose.model('SellerLog', SellerLogSchema);