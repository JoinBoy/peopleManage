import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MaterialComponent } from './material/material.component';
import { DefaultComponent} from './home/default/default.component';
import { StaffEditComponent } from './home/staff-edit/staff-edit.component';

const routes: Routes = [
	{ path:'register', component:RegisterComponent},//注册登录页面路由
	{ path:'home',component:HomeComponent,
		 children: [
				 {path:'material',component:MaterialComponent},
				 {path:'default',component:DefaultComponent},
				 
				 {path:'**', redirectTo:'default',pathMatch:'full'}
	    ]
	},
	{path:'staffEdit',component:StaffEditComponent},//编辑员工
	{ path: '**', redirectTo: 'register', pathMatch: 'full' }//匹配不上默认跳转路由
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
