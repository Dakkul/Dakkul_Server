const express = require('express');
const router = express.Router();

router.post('/create', require('./commentPOST'));
router.get('/list', require('./commentListGET'));
module.exports = router;
