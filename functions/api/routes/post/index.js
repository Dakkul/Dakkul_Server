const express = require('express');
const router = express.Router();

router.get('/list', require('./postListGET'));

module.exports = router;
