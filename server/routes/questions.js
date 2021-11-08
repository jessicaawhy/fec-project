const express = require('express');
const { getQuestions, getAnswers } = require('../controllers/questionsController');

const router = express.Router();

router.get('/:product_id/:page/:count', getQuestions);
router.get('/:question_id/answers/:page/:count', getAnswers);
module.exports = router;
