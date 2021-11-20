const express = require('express');
const router = express.Router();

router.use('/post', require('./post'));
router.use('/post/comment', require('./comment'));
router.use('/post/tag', require('./tag'));

module.exports = router;
