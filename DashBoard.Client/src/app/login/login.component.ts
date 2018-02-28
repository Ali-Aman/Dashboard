import { Component, OnInit,Output, EventEmitter } from '@angular/core';

import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  model: any = {};
  @Output() handleRegister = new EventEmitter<string>();
  constructor(private authService :AuthService) { }  
  
  login() 
  {
    this.authService.login(this.model).subscribe(data => {
      console.log('logged in Succuessfully');
    }, error => {
      console.log('falied to log in');
    })   
  }
  logout()
  {
    this.authService.userToken = null;
    localStorage.removeItem('token');
    console.log('logged out');
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  goRegister(){
    
    this.handleRegister.emit('register');
    //this.router.navigate(['register']);

  }
}
