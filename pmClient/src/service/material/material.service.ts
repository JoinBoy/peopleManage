import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor() {
    console.log("服务启动")
   }
   public index:number; //定义弹出层的index

   public mySubject = new Subject();
   //获得一个Observable
   rowDataObservable = this.mySubject.asObservable();
   
   setIndex = (a:number):void =>{
     this.index = a;
   }

   getIndex = ():number =>{
     return this.index;
   }
  
   //发送rowData数据
   emitRowData = (rowData:object) =>{
     this.mySubject.next(rowData);
   }
}
