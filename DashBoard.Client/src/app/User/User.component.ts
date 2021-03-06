import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css']
})
export class UserComponent implements OnInit {

users: any;
  constructor(private http: Http) { }

    ngOnInit() {

      this.http.get('http://localhost:5000/api/values').subscribe(data => {
       this.users = data;
        console.log(this.users);
    });

  }
}
