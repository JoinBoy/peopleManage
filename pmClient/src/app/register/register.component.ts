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
  	console.log(this)
  	console.log(this.userName)
  	console.log(this.passWord)
  	this.registerService.getHeroes().subscribe(
            val => {
                console.log("PUT call successful  returned in body", 
                  val);
            },
            response => {
                console.log("PUT call in error", response);
            },
            () => {
                console.log("The PUT observable is now completed.");
            }
        );
  }
}
