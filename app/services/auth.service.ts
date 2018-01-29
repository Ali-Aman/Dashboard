import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
baseUrl = 'http://localhost:5000/api/auth';
constructor(private http: HttpClient) { }

}