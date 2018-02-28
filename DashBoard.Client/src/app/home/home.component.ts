import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registerToggle(){
 
     //this.registerMode = !this.registerMode;
  }

  displayRegister(value){
    console.log("in home" + value);
    this.router.navigate(['/register']);


  }

}
