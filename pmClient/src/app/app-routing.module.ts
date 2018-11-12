import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component'
import { HomeComponent } from './home/home.component'
import { MaterialComponent } from './material/material.component'

const routes: Routes = [
	{ path: '', redirectTo: '/register', pathMatch: 'full' },
	{ path:'register', component:RegisterComponent},
	{ path:'home',component:HomeComponent,
		 children: [
		     {path:'material',component:MaterialComponent},
	    ]
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
