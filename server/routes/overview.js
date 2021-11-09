const express = require('express');

const router = express.Router();
const overviewController = require('../controllers/overviewController');

router.get('/:id', overviewController.getProductById);

router.get('/:id/styles', overviewController.getProductStyles);

router.post('/cart', overviewController.postToCart);

router.get('/cart', overviewController.getCart);

module.exports = router;
