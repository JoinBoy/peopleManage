import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-material',
templateUrl: './material.component.html',
styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

constructor() { }

ngOnInit() {
	this.init();
	
}
	init():void{
		layui.use('table', function(){
	    	var table = layui.table;
			  table.render({
			    elem: '#demo',
			    height: 480,
			    url: 'http://localhost:3000/material/getList',
			    page: true,
			    cols: [[
			      {field: '', title: '', width:60, sort: true, fixed: 'left',type:'checkbox'},
			      {field: 'id', title: 'ID', width:120, sort: true,fixed: 'left'},
			      {field: 'name', title: '用户名', width:120,fixed: 'left'},
			      {field: 'workID', title: '工号', width:120},
			      {field: 'gender', title: '性别', width:120 ,sort: true},
			      {field: 'birthday', title: '出生日期', width:120},
			      {field: 'idCard', title: '身份证号', width:120},
			      {field: 'wedlock', title: '婚姻状况', width:120},
			      {field: 'nativePlace', title: '籍贯', width:120},
			      {field: 'email', title: '电子邮件', width:220},
			      {field: 'phone', title: '电话号码', width:120},
			      {field: 'address', title: '联系地址', width:120},
			      {field: 'tiptopDegree', title: '最高学历', width:120},
			      {field: 'engageForm', title: '聘用形式', width:120},
			      {field: 'school', title: '学校', width:120},
			      {field: 'specialty', title: '专业', width:120},
			    ]]
			  });
			  
			});
	}
}
