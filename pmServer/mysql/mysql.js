var mysql = require("mysql");
var dbPool = mysql.createPool({
	connectionLimit : 200,
	host:'127.0.0.1',
	user:'root',
	password:'000000',
	database:'myproject'
});
module.exports = dbPool;
