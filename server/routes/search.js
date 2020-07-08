const express = require('express');
const router = express.Router();
const client = require('cheerio-httpcli');

// 구글은 이미지 src를 data uri로 base64형태로 사용하고있다. 때문에 이미지 src를 가져와 다시 디코딩 해야한다. 
// 디코딩을 위해 crypto 모듈을 사용.
// const crypto = require('crypto');


var sendData = [];

const log = console.log;
var searchkeyword = encodeURI('블랙핑크');


var url = "http://www.google.com/search?q=" + searchkeyword + "&tbm=isch";
var param = {};

client.fetch(url, param, function (err, $, res, body) {
    if (err) {
        console.log("Error:", err);
        return;
    }
    $("a.wXeWr,.islib,.nfEiy,.mM5pbd img").each(function(idx) {
      if(idx < 40){
        var data_src = $(this).attr('data-src');
        var alt = $(this).attr('alt');
        //var src = $(this).attr('src');

        // src = URL.resolve(url, src);

        //log(idx);
        //log('alt : '+alt);
        //log('data_src : ' +data_src);
        //log('src : ' +src);
      }
      
      if(idx > 40 && idx%2 != 0){
        var data_src = $(this).attr('data-src');
        var alt = $(this).attr('alt');
        //var src = $(this).attr('src');
        sendData.push({
          alt: alt,
          src: data_src
        })
        // src = URL.resolve(url, src);

        //log(idx);
        //log('alt : '+alt);
        //log('data_src : ' +data_src);
        //log('src : ' +src);
      }

});

});


router.get('/', function(req, res, next){
    res.send(sendData);
    
});

module.exports = router;