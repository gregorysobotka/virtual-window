var express = require('express');
var router = express.Router();

const APIv1 = require('./v1');

/* GET home page. */
router.use('/v1', APIv1);

router.get('/', function(req, res, next) {
    res.json({ resource: 'api' });
});


module.exports = router;
