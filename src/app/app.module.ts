import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModuleModule } from './app-routing-module.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';







@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModuleModule,MatCardModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, MainComponentComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
