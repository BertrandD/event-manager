const router = require('express').Router();
const createResponse = require('../utils/response').createResponse;

router.get('/', (req, res) => {
  res.send(createResponse('v0.0.0'))
});

module.exports = router;
