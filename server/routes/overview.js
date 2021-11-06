const express = require('express');

const router = express.Router();
const overviewController = require('../controllers/overviewController');

router.get('/:id', overviewController.getProductById);

router.get('/:id/styles', overviewController.getProductStyles);

module.exports = router;
