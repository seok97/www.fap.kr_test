const axios = require("axios");
const cheerio = require("cheerio");

// axios를 활용해 AJAX로 HTML 문서를 가져오는 함수 구현
const log = console.log;


const getHtml = async () => {
  try {
    return await axios.get("https://customsearch.googleapis.com/customsearch/v1?cr=countryKR&cx=003179116642024206801%3Axxjwiwpmroa&highRange=5&imgSize=MEDIUM&lr=lang_ko&num=5&q=%ED%94%BC%EC%B9%B4%EC%B8%84&searchType=image&key=AIzaSyBpbYnG2Lmg7QZbSGuF98eLPhuST-BN3y8");
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);

    const $bodyList = $("#pre");
//body > pre
    $bodyList.each(function(i, elem) {
      ulList[i] = {
          title: $(this).find('a h4').text()
      };
    });

    const data = ulList.filter(n => n.title);
    return data;
  })
  .then(res => log(res));


  /*
curl \
  'https://customsearch.googleapis.com/customsearch/v1?c2coff=pika&cr=countryKR&cx=www-fap-kr-test&highRange=5&lr=lang_ko&num=5&searchType=image&key=AIzaSyBpbYnG2Lmg7QZbSGuF98eLPhuST-BN3y8'
  

curl \
https://customsearch.googleapis.com/customsearch/v1?cr=countryKR&cx=003179116642024206801%3Axxjwiwpmroa&highRange=5&imgSize=MEDIUM&lr=lang_ko&num=5&q=%ED%94%BC%EC%B9%B4%EC%B8%84&searchType=image&key=AIzaSyBpbYnG2Lmg7QZbSGuF98eLPhuST-BN3y8 \


  
  */