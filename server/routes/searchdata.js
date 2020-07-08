const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    res.send({test: 'param 주고받기'});
})

module.exports = router;