import { Component, OnInit } from '@angular/core';
import { FavService } from 'src/app/services/fav.service';
import { RecommendService } from 'src/app/services/recommend.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  constructor(private service: RecommendService, private favService: FavService) { }

  user;
userId;
  ngOnInit(): void {
    this.service.getRec().subscribe(data => {
      this.user = data;
      
    }, err => {
      console.error(err);
    })

  }

  onView(id){
    sessionStorage.setItem('pId', id);
  }
  onfav(id, name, fullName) {

    this.userId = sessionStorage.getItem('userId');
     if (this.userId != null) {
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
     }
  }

}
