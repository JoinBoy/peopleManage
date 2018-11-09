var express = require('express');
var router = express.Router();
var login = require("../server/login.js");

/**
 * 路由路径
 * */
router.get('/',login);

module.exports = router;
