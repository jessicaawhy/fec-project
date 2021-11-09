const express = require('express');
const { getQuestions, getAnswers, postQuestion } = require('../controllers/questionsController');

const router = express.Router();

router.get('/:product_id/:page/:count', getQuestions);
router.get('/:question_id/answers/:page/:count', getAnswers);
// router.post('/:product_id/:body/:name/:email', postQuestion);
router.post('/', postQuestion);

module.exports = router;
