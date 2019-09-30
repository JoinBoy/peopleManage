var express = require('express');
var router = express.Router();
var login = require("../server/login.js");
var getList = require("../server/materialGetList");
var downExcel = require('../server/downExcel');

/**
 * 路由路径
 * */
router.get('/',login); //登录

//员工信息页面获得员工列表
router.get('/material/getList',getList);

router.get('/downExcel',downExcel);
module.exports = router;
