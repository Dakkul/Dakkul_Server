const express = require('express');
const router = express.Router();

//router.post('/create', require('./commentCREATE'));
router.get('/list', require('./commentlistGET'));
module.exports = router;