const express = require('express');
const updateAnswerHelpfuless = require('../controllers/answersController');

const router = express.Router();

router.put('/:answers_id/helpful', updateAnswerHelpfuless);

module.exports = router;
