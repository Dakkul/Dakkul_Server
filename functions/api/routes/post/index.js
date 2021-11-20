const express = require('express');
const router = express.Router();

router.get('/list', require('./postListGET'));
router.get('/:postId', require('./postGET'));

module.exports = router;
