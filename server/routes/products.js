const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/:page?/:count?', productsController.getProducts);

module.exports = router;
