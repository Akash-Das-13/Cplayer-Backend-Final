import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  constructor(private service: AuthService, private router: Router) { }
  public user = new User();

  ngOnInit(): void {
  }
  messege = '';
  token = '';
  Login() {
    this.service.login({
      UserId: this.user.UserId,
      Password: this.user.Password
    }).subscribe(data => {
      console.log(data);
      this.token = data['token'];
      console.log(this.token);
      sessionStorage.setItem('userId', this.user.UserId);
      sessionStorage.setItem('token', this.token);
      this.router.navigate(['/dash']);
    },
      err => {

        console.log(err['error']);
        this.messege = err['error'];
        alert(err['error']);
      });
  }

}


