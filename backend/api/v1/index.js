var express = require('express');
var router = express.Router();

const collections = require('./collections');

router.get('/', function(req, res, next) {
    res.json({ resource: 'v1' });
});

router.use('/collections', collections);

module.exports = router;
