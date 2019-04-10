import { Component, OnInit,Input} from '@angular/core';
import { fromEvent, of} from 'rxjs';
import { RegisterService } from '../../service/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
	userName="";
	passWord="";
  constructor(private registerService : RegisterService,private routes:Router) { 

  }
  /**
   * 初始化函数
   */
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
  /**
   * 调用服务里边的getHeroes()方法
   */
  login = ():void =>{
    if(this.userName.trim() == "" || this.passWord.trim() == ""){
      alert("账号密码不能为空");
    }else{
      this.registerService.getHeroes(this.userName,this.passWord).subscribe(
        (response) => {
            if(response.code == 0){
              this.routes.navigate(["/home"])
              console.log("登陆成功")
            }else{
              alert("用户名或密码错误!")
            }
        },
        (response) => {
            alert( `请求失败请重新登录${response}`)
        },
     );
    }
  };
  /**
   * 监听登录页回车按钮
   */
  toLogin = (event):void => {
    if(event.keyCode == 13){
      this.login();
    }
  }
}
