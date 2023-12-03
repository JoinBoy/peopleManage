var excel = require('excel-export');
var dbPool= require("../mysql/mysql.js");

//定义传入excel中的对象
var conf = {};
//定义表头
var cols = [{
    caption:'id',
    type:'string',
},
{
    caption:'用户名',
    type:'string',
},
{
    caption:'工号',
    type:'string',
},
{
    caption:'性别',
    type:'string',
}]
//表格行数据
conf.name = "mysheet";
conf.cols = cols;
conf.rows = [];

var downExcel = function(req,res,next){

    //从数据库中取出数据
    dbPool.getConnection((err,connection) =>{

        connection.query(`SELECT * FROM employee ORDER BY id`,function(err,data,field){
            if(err) throw err;
            if(data.length > 0){
                for(var i = 0;i<data.length;i++){
                    var row = [];
                    for(var j = 0;j<cols.length;j++){
                        if(j == 0) row.push(data[i].id.toString());
                        if(j == 1) row.push(data[i].name.toString());
                        if(j == 2) row.push(data[i].workID.toString());
                        if(j == 3) row.push(data[i].gender.toString());
                    }
                    conf.rows.push(row);
                }
                var result = excel.execute(conf);
                res.setHeader('Content-Type', 'application/vnd.openxmlformats;charset=utf-8');
                res.setHeader("Content-Disposition", "attachment; filename=" + "aaa" + ".xlsx");
                res.end(result,'binary');
            }else{
                res.json({code:1,message:"fail"});
            }
        })
        //释放连接池
        connection.release();
    })

}

module.exports = downExcel;
