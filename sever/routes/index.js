const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    res.send({greeting:'안녕 리액트와 노트를 연동하자.'});
})

module.exports = router;