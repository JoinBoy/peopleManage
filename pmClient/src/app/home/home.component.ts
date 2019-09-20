import { Component, OnInit, ViewChild} from '@angular/core';
import { fromEvent, of} from 'rxjs';
import { ChildActivationEnd } from '@angular/router';
import {StaffEditComponent} from './staff-edit/staff-edit.component';

@Component({
  selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers:[]
})
export class HomeComponent implements OnInit {

	public totalTitle:String = "首页"; //home页上方一级标题
	public fatherTitle:String = "欢迎页面"; // home页上方耳机标题
	public showEdit:boolean = true; //显示隐藏编辑按钮标志位
	public editPageIndex:number; //编辑弹窗index
	
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
		// this.layuiOpen();
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
	
}
