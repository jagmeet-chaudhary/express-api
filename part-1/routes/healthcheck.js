const express = require('express');
const router = express.Router();
const healthcheckController = require('../controllers/healthcheck.controller')
router.get("/",healthcheckController.get);
module.exports = router;