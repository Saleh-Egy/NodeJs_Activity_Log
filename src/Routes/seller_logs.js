const express = require('express')
const router = express.Router()
const SellerLogController =   require('../Controllers/SellerLogController');
// Retrieve all Logs
router.get('/', SellerLogController.findAll);
// Create a new Logs
router.post('/', SellerLogController.create);
// Retrieve a single Logs with id
router.get('/:userId', SellerLogController.findById);
module.exports = router