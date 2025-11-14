const router = require('express').Router();
const { getProgress, updateProgress } = require('../controllers/progressController');

router.get('/user/:userId', getProgress);
router.post('/update', updateProgress);

module.exports = router;
