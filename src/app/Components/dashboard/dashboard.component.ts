import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerNameModel } from 'src/app/Model/plyerName';
import { FavService } from 'src/app/services/fav.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  contents: [] = [];
  form;
  constructor(private service: ServiceService, private favService: FavService,  private router: Router) { }

  tcode: string;
  Details: object[];
  userId;
  Name;
  Id;

  ngOnInit(): void {
    this.Name = sessionStorage.getItem('name');
    if (this.Name != null) {
      this.service.getPlayerByName(this.Name).subscribe(
        data => {
          let res = data;
          this.Details = res['result'];
        });
    }

  }


  onSearch() {

    this.service.getPlayerByName(this.tcode).subscribe(
      data => {
        let res = data;
        this.Details = res['result'];
      },
      err => {
        console.error(err);

      }
    );
  }

  onView(id) {
    this.Id = id;
    console.log(id);
    sessionStorage.setItem('pId', this.Id);


  }

  onfav(id, name, fullName) {

    this.userId = sessionStorage.getItem('userId');
    // if (this.userId != null) {
      this.favService.postFav({

        PId: id,
        Name: name,
        FullName: fullName,
        UserId: this.userId,

      }).subscribe(data => {
        alert("Added to Favourite");
      }, err => {
        console.log(err['error']);
        
        alert(err['error']);
        
      })
    // }
  }
}
