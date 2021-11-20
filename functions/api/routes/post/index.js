const express = require('express');
const router = express.Router();

router.get('/list', require('./postListGET'));
router.post('/tagSearch', require('./postTagSearchPOST'));
router.get('/:postId', require('./postGET'));

module.exports = router;
