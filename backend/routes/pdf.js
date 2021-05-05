const router = require('express').Router();
const {
  getAnswers, createAnswer, getUserById,
} = require('../controllers/answers');

router.get('/', getAnswers);
router.get('/:id', getUserById);
router.post('/', createAnswer);

module.exports = router;
