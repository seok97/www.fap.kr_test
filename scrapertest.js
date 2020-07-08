const cheerio = require("cheerio");
const client = require('cheerio-httpcli');
const URL = require('url');

// 구글은 이미지 src를 data uri로 base64형태로 사용하고있다. 때문에 이미지 src를 가져와 다시 디코딩 해야한다. 
// 디코딩을 위해 crypto 모듈을 사용.
// const crypto = require('crypto');

const log = console.log;
var searchkeyword = encodeURI('블랙핑크');
var googlegeturl = 'https://www.google.co.kr/search?hl=ko&tbm=isch&source=hp&biw=1920&bih=969&ei=PwkEX73EM4GQr7wP3emskA4&q='+searchkeyword+'&oq='+searchkeyword+'&gs_lcp=CgNpbWcQDDIFCAAQsQMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCABQAFgAYK5KaABwAHgAgAFYiAFYkgEBMZgBAKoBC2d3cy13aXotaW1n&sclient=img&ved=0ahUKEwj934mxtbrqAhUByIsBHd00C-IQ4dUDCAc';


var url = "http://www.google.com/search?q=" + searchkeyword + "&tbm=isch";
var param = {};

client.fetch(url, param, function (err, $, res, body) {
    if (err) {
        console.log("Error:", err);
        return;
    }
    log($("a.wXeWr,.islib,.nfEiy,.mM5pbd img.rg_i,.Q4LuWd").html());
    $("a.wXeWr,.islib,.nfEiy,.mM5pbd img").each(function(idx) {
      if(idx < 40){
        var data_src = $(this).attr('data-src');
        var alt = $(this).attr('alt');
        //var src = $(this).attr('src');

        // src = URL.resolve(url, src);

        log(idx);
        log('alt : '+alt);
        log('data_src : ' +data_src);
        //log('src : ' +src);
      }
      
      if(idx > 40 && idx%2 != 0){
        var data_src = $(this).attr('data-src');
        var alt = $(this).attr('alt');
        //var src = $(this).attr('src');

        // src = URL.resolve(url, src);

        log(idx);
        log('alt : '+alt);
        log('data_src : ' +data_src);
        //log('src : ' +src);
      }

});

});


/* const getHtml = async () => {
  try {
    return await axios.get(googlegeturl);
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);

    const $bodyList = $("div#islmp div#islrg div.islrc").children('div');
//body > pre
    $bodyList.each(function(i) {
      
      ulList[i] = {
          src: $(this).find('img').attr('src')
      };
    });

    const data = ulList.filter(n => n.src);
    return data;
  })
  .then(res => log(res));
 */
