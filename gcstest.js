var reqURL =
  "https://customsearch.googleapis.com/customsearch/v1?cr=countryKR&cx=003179116642024206801%3Axxjwiwpmroa&highRange=5&imgSize=MEDIUM&lr=lang_ko&num=5&q=%ED%94%BC%EC%B9%B4%EC%B8%84&searchType=image&key=AIzaSyBpbYnG2Lmg7QZbSGuF98eLPhuST-BN3y8";
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var req = new XMLHttpRequest();
const fetch = require("node-fetch");

var teststate = { ttt: [] };

fetch(reqURL)
  .then((res) => res.json())
  .then((res) => {
    // console.log(res);
    for (var i = 0; i < res.items.length; i++) {
      teststate.ttt[i] = {
        idx: i,
        title: res.items[i].title,
        src: res.items[i].link,
      };
    }
    console.log(teststate.ttt[0]);
  });
