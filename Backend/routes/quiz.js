const router = require('express').Router();
const { generateQuiz } = require('../controllers/quizController');

router.post('/generate', generateQuiz);

module.exports = router;
