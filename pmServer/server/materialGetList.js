var dbPool= require("../mysql/mysql.js");
var getList = function(req, res, next){
	var start = null; //起始条数
	var count = null; //总条数
	if((req.query.page-0) == 1){
		start =0;
	}else{
		start = (req.query.page-1)*req.query.limit;
	}
	dbPool.getConnection((err,connection)=>{
		connection.query('SELECT * FROM employee',function(err,rows,field){
			if(err) throw err;
			count = rows.length;
		})
		connection.release();
		dbPool.getConnection((err,connection)=>{
			connection.query('SELECT * FROM employee ORDER BY id LIMIT '+ start+','+req.query.limit+'',function(err,rows,field){
				if(err) throw err;
				if(rows.length>0){
					json = {code:0,message:"success",count:count,data:rows};
				}else{
					json = {code:1,message:"fail"};
				}
				res.json(json);
			})
			connection.release();
		})
	})
	
}
module.exports = getList;