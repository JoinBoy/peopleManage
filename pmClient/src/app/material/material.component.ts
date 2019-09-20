import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {materialGetList} from '../../utils/utils';
import {StaffEditComponent} from '../home/staff-edit/staff-edit.component';
import { MaterialService } from '../../service/material/material.service';
import * as $ from 'jquery';

@Component({
selector: 'app-material',
templateUrl: './material.component.html',
styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

	constructor(private MaterialService:MaterialService) {
		console.log(this.MaterialService.index,"aksdfjklasdfjl")
	}

	public editPageIndex:number;  //编辑弹窗层数
	public rowData:object = {};

	//获得子组件
	@ViewChild(StaffEditComponent) StaffEditComponent:StaffEditComponent;
	@ViewChild('ad')
	ad:StaffEditComponent;


	ngOnInit() {
		this.init();
	}
	init():void{
		var that = this;
		layui.use('table', function(){
			var table = layui.table;
			var layer = layui.layer;
			  table.render({
			    elem: '#demo',
			    height: 500,
			    url: materialGetList,
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
			      {field:'',title:"操作",width:128,fixed:'right',toolbar:'<div class="layui-btn-group"><button class="layui-btn layui-btn-sm" lay-event="edit">编辑</button>'
			      +'<button class="layui-btn layui-btn-sm layui-btn-danger" lay-event="del">删除</button></div>'}
			    ]]
			  });
			  /**
			 	* 工具栏监听事件
			 	*/
				table.on('tool(test)', function(obj){ //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
				var data = obj.data; //获得当前行数据
				var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
				var tr = obj.tr; //获得当前行 tr 的 DOM 对象（如果有的话）
				
				if(layEvent === 'detail'){ //查看
					//do somehing
				} else if(layEvent === 'del'){ //删除
					console.log(2222)
					// layer.confirm('真的删除行么', function(index){
					// obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
					// layer.close(index);
					// //向服务端发送删除指令
					// });
				} else if(layEvent === 'edit'){ //编辑
					//把点击这一行的数据通过emitRowData()方法发送出去
					that.MaterialService.emitRowData(data);
					that.rowData = data || {};
					that.layuiOpen()
				} else if(layEvent === 'LAYTABLE_TIPS'){
					layer.alert('Hi，头部工具栏扩展的右侧图标。');
				}
			});



			});

			
	}
	/**
	 * 调用layui弹出层
	 */
	layuiOpen = ():void => {
		var that = this;
		console.log(that.ad.element.nativeElement)
		layui.use('layer',function(){
			var layer = layui.layer;
			layer.open({
				// btn: ['确定', '取消'],
				anim: 0,
				type:1,
				title:'编辑',
				closeBtn :2,
				content:$(that.ad.element.nativeElement),
				area:['1200px','600px'],
				resize:false,
				success:(layero,index)=>{
					//弹出成功改变service的index的值
					that.MaterialService.setIndex(index);
				},
				cancel: function(index, layero){ 
					//点击右上角关闭回调更改弹窗为透明，之后关闭弹窗
					that.ad.element.nativeElement.style.display = 'none';
					layer.close(index)
					return false; 
				  }    
			})
		})
	}
}

