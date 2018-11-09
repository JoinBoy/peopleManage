var dbPool= require("../mysql/mysql.js");
var aaa = function(req, res, next) {
	console.log(req.query.name)
	console.log(req.query.password)
	dbPool.getConnection((err,connection)=>{
		connection.query('SELECT * FROM user',function(err,rows,field){
			if(err) throw err;
			res.json(rows);
		})
		connection.release();
	})
}
module.exports = aaa;
