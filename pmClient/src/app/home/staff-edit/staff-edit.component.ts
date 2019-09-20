import { Component, OnInit,Input,ElementRef ,SimpleChanges,ChangeDetectorRef} from '@angular/core';
import { Observable ,fromEvent,empty ,throwError,interval,timer} from 'rxjs';
import { MaterialService } from '../../../service/material/material.service';


import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";


@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {

  public editPageType:Boolean = true; //是否显示员工编辑界面
  public rowData:object = {}; //表格数据
  public gender:string ;
  // @Input()
  // rowDataFather:Object  


  constructor(public element: ElementRef,public MaterialService:MaterialService,private ref:ChangeDetectorRef) { 
    var that = this;
    this.MaterialService.rowDataObservable.subscribe( (data:any) => {
      that.rowData = data;
      that.gender =data.gender;
      // this.ref.checkNoChanges();
    })
    // this.rowData = this.rowDataFather 
    // console.log(this.rowData)
  }

 

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
   
  }
  
  ngOnInit() {
    this.addForm();
    this.text();
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
    console.log(this.rowData)
    var sureBtn = this.element.nativeElement.querySelector("#sure");
  }
  /**
   * 点击编辑员工取消
   */
  closeClick = ():void =>{
    
    layui.layer.close(this.MaterialService.getIndex());
  }
  /**
   * 测试
   */
  text():void{
    var source = timer(1000);

    source.subscribe({
        next: function(value) {
            console.log(value)
        },
        complete: function() {
            console.log('complete!');
        },
        error: function(error) {
        console.log('Throw Error: ' + error)
        }
    });
  }
  radioChange = (e):void =>{
    console.log(e)
  }
}
