const express = require('express');
const router = express.Router();

router.get('/list', require('./postListGET'));
router.get('/:postId', require('./postGET'));
router.get('/tagSearch', require('./postTagSearchGet'));

module.exports = router;
