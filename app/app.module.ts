import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './User/User.Component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,   
    UserComponent
,
    NavComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
