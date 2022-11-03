/*
* All routers go here
*/

const express = require('express');
const GeoController = require('../controllers/GeoController');
const router = express.Router();

router.get('/location',GeoController.getCurrentLocation);

module.exports = router;