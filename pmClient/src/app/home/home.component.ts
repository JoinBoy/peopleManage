import { Component, OnInit } from '@angular/core';
import { fromEvent, of} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	this.init();
  	fromEvent(window,'resize')
			.subscribe(() => this.getClientHeight());
　		this.getClientHeight();
  }
	init():void{
		layui.use('element', function(){
		  var element = layui.element;
		});
	};
	getClientHeight():void{
		var height = document.body.clientHeight;
		var place = document.getElementById("place");
		place.setAttribute("style","height:"+height+"px");
  };
}
