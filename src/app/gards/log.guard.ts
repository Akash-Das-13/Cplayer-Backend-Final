import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogGuard implements CanActivate {
  constructor(private service:AuthService, private router:Router) {
    

  }

  canActivate(): boolean{
    if (this.service.loggedIn()) {
      return false;
    } else {
     return true;
    }
  }
  
}
