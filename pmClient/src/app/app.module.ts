import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MaterialComponent } from './material/material.component';
import { DefaultComponent } from './home/default/default.component';
import { StaffEditComponent } from './home/staff-edit/staff-edit.component';
import { MaterialService } from '../service/material/material.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    MaterialComponent,
    DefaultComponent,
    StaffEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MaterialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
