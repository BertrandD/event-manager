const router = require('express').Router();
const createResponse = require('../utils/response').createResponse;

router.get('/', (req, res) => {
  res.status(200).json(createResponse())
});

module.exports = router;
