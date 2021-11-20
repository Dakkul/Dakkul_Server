const express = require('express');
const router = express.Router();

router.get('/list', require('./postListGET'));
router.get('/:postId', require('./postGet.js'));

module.exports = router;
