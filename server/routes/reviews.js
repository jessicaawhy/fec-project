const express = require('express');
const reviewsController = require('../controllers/reviewsController');

const router = express.Router();

router.get('/:product_id/:page/:count', reviewsController.review_get);
router.get('/meta/:product_id', reviewsController.review_get_meta);

module.exports = router;
