const express = require("express");
const url = require("url");
const router = express.Router();

router.get("/", function (req, res, next) {
  var getdata = url.parse(req.url, true).query;
  console.log(getdata.q);
  if (getdata.q != undefined) res.send({ q: getdata.q });
});

module.exports = router;
