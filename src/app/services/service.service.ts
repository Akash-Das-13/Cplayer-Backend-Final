import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getPlayerByName(name:string): Observable<any> {
    return this.http.get(`${environment.pNameurl}/${name}`,httpOptions);
  }

  getPlayerById(id): Observable<any> {
    return this.http.get(`${environment.pIdurl}/${id}`,httpOptions);
  }

  
}
