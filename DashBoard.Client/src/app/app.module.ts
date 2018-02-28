import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './User/User.Component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { routing } from './routing';


@NgModule({
  declarations: [
    AppComponent,   
    UserComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
