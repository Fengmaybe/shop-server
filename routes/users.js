var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//在这里就可以用模拟数据接口，在这里可以写路由。
module.exports = router;
