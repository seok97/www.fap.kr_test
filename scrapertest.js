const axios = require("axios");
const cheerio = require("cheerio");

// axios를 활용해 AJAX로 HTML 문서를 가져오는 함수 구현
const log = console.log;

const getHtml = async () => {
  try {
    return await axios.get("https://velog.io/");
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);

    const $bodyList = $("#root div.sc-iRbamj.blSEcj div.sc-fjdhpX.iqwyib div.sc-jlyJG.lpgbkm main div").children("div");
//#root > div.sc-iRbamj.blSEcj > div.sc-fjdhpX.iqwyib > div.sc-jlyJG.lpgbkm > main > div
    $bodyList.each(function(i, elem) {
      ulList[i] = {
          title: $(this).find('a h4').text()
      };
    });

    const data = ulList.filter(n => n.title);
    return data;
  })
  .then(res => log(res));