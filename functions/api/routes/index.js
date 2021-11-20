const express = require('express');
const router = express.Router();

router.use('/comment', require('./comment'));
router.use('/post', require('./post'));

module.exports = router;

