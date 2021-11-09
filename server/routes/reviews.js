const express = require('express');
const reviewsController = require('../controllers/reviewsController');

const router = express.Router();

router.get('/:product_id/:page/:count/:sort', reviewsController.review_get);
router.get('/meta/:product_id', reviewsController.review_get_meta);

router.put('/:review_id/helpful', reviewsController.review_mark_helpful);
router.put('/:review_id/report', reviewsController.review_report);

router.post('/', reviewsController.review_create);

module.exports = router;
