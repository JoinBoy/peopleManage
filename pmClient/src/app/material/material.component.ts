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
			    height: 312,
			    url: 'https://www.layui.com/demo/table/user',
			    page: true,
			    cols: [[
			      {field: 'id', title: 'ID', width:80, sort: true, fixed: 'left'},
			      {field: 'username', title: '用户名', width:80},
			      {field: 'sex', title: '性别', width:80, sort: true},
			      {field: 'city', title: '城市', width:80},
			      {field: 'sign', title: '签名', width: 177},
			      {field: 'experience', title: '积分', width: 80, sort: true},
			      {field: 'score', title: '评分', width: 80, sort: true},
			      {field: 'classify', title: '职业', width: 80},
			      {field: 'wealth', title: '财富', width: 135, sort: true}
			    ]]
			  });
			  
			});
	}
}
