import { Component, OnInit,Input,ElementRef } from '@angular/core';

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {
  // 接收父组件传值
  @Input() showEdit:boolean;
  
  public editPageType:Boolean = true; //是否显示员工编辑界面
  public editPageIndex:number;

  constructor(public element: ElementRef) { 
    
   
  }
  
  ngOnInit() {
    this.addForm();
  }
  /**
   * 初始化加载form组件
   */
  addForm = ():void =>{
    console.log(this.element.nativeElement.querySelectorAll('.dateInput'))
    layui.use(['laydate','form'],()=>{ //加载表单组件
      var form = layui.form;
      var laydate = layui.laydate;
      //执行一个laydate实例
      //循环绑定laydate
      this.element.nativeElement.querySelectorAll('.dateInput').forEach(element => {
        laydate.render({
          elem:element,
        })
      });
    })
  }
  /**
   * 点击编辑员工确定
   */
  sureClick = ():void =>{
    var sureBtn = this.element.nativeElement.querySelector("#sure");
    console.log(sureBtn)
  }
  /**
   * 点击编辑员工取消
   */
  closeClick = (number):void =>{
    layui.close(number);
  }
}
