import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public service: AuthService, private router: Router) { }

  userId;
  

  // reg;
  // log=this.service.loggedIn();


  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userId');
  }

  onMore() {
   this.ngOnInit();
  }

  onLogout(){
    if (confirm('Are You Sure You Want To Logout?')) {
    
    sessionStorage.clear();
    
    this.ngOnInit();
    }
  }


  

}
