const express = require('express');
const questionsController = require('../controllers/questionsController');

const router = express.Router();

router.get('/:product_id/:page/:count', questionsController.getQuestions);
// router.get('/:product_id/:page/:count', (req, res) => {
//   console.log('sdfkjhdskjfh----', req);
//   res.send()
// });

module.exports = router;
