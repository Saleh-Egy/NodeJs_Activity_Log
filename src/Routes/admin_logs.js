const express = require('express')
const router = express.Router()
const AdminLogController =   require('../Controllers/AdminLogController');
// Retrieve all Logs
router.get('/', AdminLogController.findAll);
// Create a new Logs
router.post('/', AdminLogController.create);
// Retrieve a single Logs with id
router.get('/:userId', AdminLogController.findById);
module.exports = router