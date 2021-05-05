const router = require('express').Router();
const {
  getAnswers, createAnswer,
} = require('../controllers/answers');

router.get('/', getAnswers);
router.post('/', createAnswer);

module.exports = router;
