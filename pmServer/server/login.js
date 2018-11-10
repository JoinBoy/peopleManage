var dbPool= require("../mysql/mysql.js");
var session = require("express-session");
var cookie = require('cookie-parser');
var login = function(req, res, next) {
	var json = null;
	dbPool.getConnection((err,connection)=>{
		connection.query('SELECT * FROM user where USERNAME = ? and PASSWORD = ?',[req.query.userName,req.query.passWord],function(err,rows,field){
			if(err) throw err;
			if(rows.length>0){
				json = {code:1,message:"success"};
				res.cookie('userName',req.query.userName,{maxAge:1000*60*60*24*7})
			}else{
				json = {code:0,message:"fail"};
			}
			res.json(json);
		})
		connection.release();
	})
}
module.exports = login;
