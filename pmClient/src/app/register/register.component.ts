import { Component, OnInit,Input} from '@angular/core';
import { fromEvent, of} from 'rxjs';
import { RegisterService } from '../../service/register/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
	userName="";
	passWord="";
  constructor(
	private registerService : RegisterService
  ) { }

  ngOnInit(){
		fromEvent(window,'resize')
			.subscribe(() => this.getClientHeight());
　		this.getClientHeight();  	
  }
  /*
   * 获得屏幕高度之后给外层div添加高度
   */
  getClientHeight():void{
		var height = document.body.clientHeight;
		var place = document.getElementById("place");
		place.setAttribute("style","height:"+height+"px");
  };
  login():void{
		this.registerService.getHeroes(this.userName,this.passWord).subscribe(
            res => {
                if(res.code == 0){
                	window.location.href = '/home'
                	console.log("登陆成功")
                }else{
                	alert("用户名或密码错误!")
                }
            },
            response => {
                alert('请求失败请重新登录')
            },
         );
  }
}
