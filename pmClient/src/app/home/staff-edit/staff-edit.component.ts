import { Component, OnInit,Input,ElementRef ,SimpleChanges,ChangeDetectorRef, Renderer2} from '@angular/core';
import { Observable ,fromEvent,empty ,throwError,interval,timer} from 'rxjs';
import { MaterialService } from '../../../service/material/material.service';
import * as $ from 'jquery';

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
  public aaa:ElementRef<Renderer2>;
  // @Input()
  // rowDataFather:Object  


  constructor(public element: ElementRef,public MaterialService:MaterialService,private ref:ChangeDetectorRef,private renderer :Renderer2) { 
    
  }

 

  ngOnChanges(changes: SimpleChanges): void {
    
   
  }
  
  ngOnInit() {
    this.addForm();
    this.text();
    this.getData(); //调用获取数据
  }

  ngAfterViewInit(): void {
    
    
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
          done:function(e,a,c){
            console.log(e)
            console.log(a)
            console.log(c)
            console.log(element.id)
          }
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
    // console.log(this.element.nativeElement.querySelector('.dateInput').style.display = "none")
    this.element.nativeElement.style.display = "none";
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
  /**
   * 获取列表传过来的数据,并且改变radio选中
   */
  getData = ():void =>{
    var that = this;
    this.MaterialService.rowDataObservable.subscribe( (data:any) => {
      that.rowData = data;
      console.log(data)
      //性别
      if(data.gender === "男") that.renderer.nextSibling(that.element.nativeElement.querySelector('#man')).click();
       else that.renderer.nextSibling(that.element.nativeElement.querySelector('#women')).click();
      //聘用形式
      if(data.engageForm === "劳动合同") that.renderer.nextSibling(that.element.nativeElement.querySelector('#labor')).click();
        else that.renderer.nextSibling(that.element.nativeElement.querySelector('#labour')).click();
      //婚姻状况
      if(data.wedlock === "已婚") that.renderer.nextSibling(that.element.nativeElement.querySelector('#married')).click();
        else if(data.wedlock === "离异") that.renderer.nextSibling(that.element.nativeElement.querySelector("#divorced")).click();
        else that.renderer.nextSibling(that.element.nativeElement.querySelector("#spinsterhood")).click();
      //学历
      that.element.nativeElement.querySelector('#tiptopDegree').value = data.tiptopDegree;
      that.element.nativeElement.querySelector('#nationName').value = data.nationName;
      layui.form.on('select',function(obj){
        console.log(obj)
      })
      layui.form.on('radio',function(obj){
        console.log(obj.value)
      })
      layui.form.on('laydate',function(obj){
        console.log(obj)
      })
      // layui.form.render('select','hm2');
      // layui.form.render('select','hm2');
      // layui.form.render();
      console.log(layui.form.render('select'))
    
    })

  }
}
