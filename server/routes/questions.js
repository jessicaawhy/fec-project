const express = require('express');
const {
  getQuestions, getAnswers, postQuestion, postAnswer, updateHelpfullness,
} = require('../controllers/questionsController');

const router = express.Router();

router.get('/:product_id/:page/:count', getQuestions);
router.get('/:question_id/answers/:page/:count', getAnswers);
router.post('/', postQuestion);
router.post('/:question_id/answers', postAnswer);
router.put('/:question_id/helpful', updateHelpfullness);

module.exports = router;
