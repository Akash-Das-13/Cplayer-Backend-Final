import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   *
   */
  constructor(private service:AuthService, private router:Router) {
    

  }

  canActivate(): boolean{
    if (this.service.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login'])
      return false;
    }
  }
  
}
