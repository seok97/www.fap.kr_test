const express = require('express');
const router = express.Router();
const cheerio = require('cheerio');
const axios = require('axios');

const getHtml = async () => {
    try {
      return await axios.get("https://velog.io/");
    } catch (error) {
      console.error(error);
    }
  };

getHtml()
.catch(error=> console.log(error))
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);

    const $bodyList = $("#root div.sc-iRbamj.blSEcj div.sc-fjdhpX.iqwyib div.sc-jlyJG.lpgbkm main div").children("div");
//#root > div.sc-iRbamj.blSEcj > div.sc-fjdhpX.iqwyib > div.sc-jlyJG.lpgbkm > main > div
    $bodyList.each(function(i, elem) {
      ulList[i] = {
          idx: i,
          title: $(this).find('a h4').text()
      };
    });

    const data = ulList.filter(n => n.title);
    return data;
  }).then(senddata => {

router.get('/', function(req, res, next){
    console.log('localhost:3002/users');
    res.send(senddata);
    
})
});

module.exports = router;