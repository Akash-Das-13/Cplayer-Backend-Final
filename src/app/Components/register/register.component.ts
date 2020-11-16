
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public key: string;

  constructor(private service: AuthService,private router: Router) { }
  public user = new User();

  ngOnInit(): void {

  }

  messege='';

  Register() {
    this.service.register({
      UserId: this.user.UserId,
      Password: this.user.Password,
      Name: this.user.Name,
      Email: this.user.Email,
      Mobile: this.user.Mobile
    }).subscribe(data => {
      // console.log(data);
      if (data) {
        
        this.router.navigate(['/login']);
      } 
      else {
        alert('Invalid email or password !');
      }
    
    },
      err => {

        console.log(err['error']);
        this.messege=err['error'];

        alert(err['error']);
      })

  }

  


}
