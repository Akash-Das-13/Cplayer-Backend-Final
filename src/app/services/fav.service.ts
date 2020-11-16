import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from '../Model/user';






@Injectable({
  providedIn: 'root'
})

export class FavService {

  constructor(private http: HttpClient) { }


token;
  getFav(userId): Observable<any> {

    this.token = sessionStorage.getItem('token');

    let httpOptions = new HttpHeaders({ 'Content-Type': 'application/json',
                                         'Authorization': `Bearer ${this.token}` })
    

    return this.http.get(`${environment.favurl}/${userId}`, {headers: httpOptions})
  }

  postFav(user): Observable<any> {

    this.token = sessionStorage.getItem('token');
    

    let httpOptions = new HttpHeaders({ 'Content-Type': 'application/json',
                                         'Authorization': `Bearer ${this.token}` })


    return this.http.post(environment.favurl, user,{headers: httpOptions});
  }

  dltFav(pId,userId): Observable<any> {
    let httpOptions = new HttpHeaders({ 'Content-Type': 'application/json',
                                         'Authorization': `Bearer ${this.token}` })


    return this.http.delete(`${environment.favurl}/${pId}/${userId}`,{headers: httpOptions});

  }

}
