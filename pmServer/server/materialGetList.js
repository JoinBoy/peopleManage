var dbPool= require("../mysql/mysql.js");
var getList = function(req, res, next){
	var start = null; //起始条数
	var count = null; //总条数
	if((req.query.page-0) == 1){
		start =0;
	}else{
		start = (req.query.page-1)*req.query.limit;
	}
	//数据变量
	dbPool.getConnection(async (err,connection)=>{
		console.log(3)
		var promise1 = new Promise((resolve,reject)=>{
			connection.query('SELECT * FROM employee',function(err,rows,field){
				if(err) throw err;
				count = rows.length;
				resolve(count);
			})
		}) 
		var promise2 = new Promise((resolve,reject) =>{
			connection.query(  `SELECT em.*,po.name AS politicName ,na.name AS nationName,pos.name AS posName,jo.name AS jobName,de.name AS departName FROM 
							employee AS em  
						LEFT JOIN politicsstatus AS po ON em.politicId = po.id  
						LEFT JOIN nation AS na ON em.nationId = na.id 
						LEFT JOIN position AS pos ON em.posId = pos.id
						LEFT JOIN joblevel AS jo ON em.jobLevelId = jo.id
						LEFT JOIN department AS de ON em.departmentId = de.id  ORDER BY em.id LIMIT `+ start+','+req.query.limit+'',function(err,rows,field){
				if(err) throw err;
				if(rows.length>0){
					var list = rows;
					resolve(list);
				}
			})
		}) 
		var promise3 = new Promise((resolve,reject) => {
			connection.query(`SELECT * from politicsstatus order by id`,function(err,rows,field){
				if(err) throw err;
				if(rows.length>0){
					var polList = rows;
					resolve(polList)
				}
			})
		}) 
		var promise4 = new Promise((resolve,reject) =>{
			connection.query(`SELECT * from nation order by id`,function(err,rows,field){
				if(err) throw err;
				if(rows.length>0){
					var nationList = rows;
					resolve(nationList);
				}
			})
		}) 
		var promise5 = new Promise((resolve,reject) =>{
			connection.query(`SELECT * from position order by id`,function(err,rows,field){
				if(err) throw err;
				if(rows.length>0){
					var positionList = rows;
					resolve(positionList);
				}
			})
		}) 
		var promise6 = new Promise((resolve,reject) =>{
			connection.query(`SELECT * from joblevel order by id`,function(err,rows,field){
				if(err) throw err;
				if(rows.length>0){
					var joblevelList = rows;
					resolve(joblevelList);
				}
			})
		}) 
		if(err) throw err
	
		connection.release();

		Promise.all([promise1,promise2,promise3,promise4,promise5,promise6]).then((resolve)=>{
			var list = new Object;
			var count = resolve[0];
			var data = resolve[1];
			list.polList = resolve[2];
			list.nationList = resolve[3];
			list.positionList = resolve[4];
			list.joblevelList = resolve[5];
			if(Object.keys(data).length >0){
				json = {code:0,message:"success",count:count,data:data,list:list};
			}else{
				json = {code:1,message:"fail"};
			}
			res.json(json);
		})

		
		
	})
	console.log(2)
	
}
module.exports = getList;