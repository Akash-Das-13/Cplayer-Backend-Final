import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(user){
    return this.http.post(environment.loginUrl,user)
  }
  register(user){
    return this.http.post(environment.registerUrl,user)
  }

  loggedIn(){
    return!!sessionStorage.getItem('token');
  }

}
