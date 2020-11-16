import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/Model/user';
import { FavService } from 'src/app/services/fav.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {

  constructor(private service: FavService) { }

  userId;
  user;

  ngOnInit(): void {
    
    this.onLoad();
  }
  onView(id) {
    sessionStorage.setItem('pId', id);
  }


  onDelete(id) {
    this.userId = sessionStorage.getItem('userId');
    if (confirm('Are you sure to delete?')) {
      this.service.dltFav(id, this.userId).subscribe(data => {
        alert("Deleted");
        this.ngOnInit();
      },
      err => {
        console.error(err);
      });
    }
  }

  onLoad(){
    this.userId = sessionStorage.getItem('userId');
    this.service.getFav(this.userId).subscribe(data => {
      this.user = data;

    },
      err => {
        console.error(err)
      });
      // this.ngOnInit();
  }
}
