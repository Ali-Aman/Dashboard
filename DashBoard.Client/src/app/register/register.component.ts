import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model: any = {};
  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(()=> {
    console.log('registration successfual')
    },
    error => {
        console.log(error);
    })
  }

  cancel() {

    console.log('cancelled');
  }

}
