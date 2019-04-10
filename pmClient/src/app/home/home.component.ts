import { Component, OnInit, ViewChild} from '@angular/core';
import { fromEvent, of} from 'rxjs';
import { ChildActivationEnd } from '@angular/router';
import {StaffEditComponent} from './staff-edit/staff-edit.component';

@Component({
  selector: 'app-home',
	templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public totalTitle:String = "首页"; //home页上方一级标题
	public fatherTitle:String = "欢迎页面"; // home页上方耳机标题
	public showEdit:boolean = false; //显示隐藏编辑按钮标志位
	
@ViewChild(StaffEditComponent) staffEditComponent: StaffEditComponent;
  constructor() {
		
	}

	ngAfterViewInit(): void {
		//Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
		//Add 'implements AfterViewInit' to the class.
		console.log("564",this.staffEditComponent)
	}

	/**
	 * 初始化生命周期
	 */
  ngOnInit() {
  	this.init();
  	fromEvent(window,'resize')
			.subscribe(() => this.getClientHeight());
		this.getClientHeight();
		this.layuiOpen();
	}
	/**
	 * 初始化绑定layui
	 */
	init():void{
		layui.use('element', function(){
		  var element = layui.element;
		});
	};
	/**
	 * 获取浏览器窗口高度
	 */
	getClientHeight = ():void =>{
		var height = document.body.clientHeight;
		var place = document.getElementById("place");
		place.setAttribute("style","height:"+height+"px");
	};
	/**
	 * 调用layui弹出层
	 */
	layuiOpen = ():void => {
		layui.use('layer',function(){
			var layer = layui.layer;
			layer.open({
				anim: 0,
				type:2,
				title:'编辑',
				closeBtn :2,
				content:['staffEdit'],
				area:['1200px','600px'],
				resize:false,
				success:(layero,index)=>{
					// layer.close(1)
				}
			})
		})
	}
}
