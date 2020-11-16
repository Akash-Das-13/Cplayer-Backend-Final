import { Component, OnInit, Pipe } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  Id;
  Name;
  constructor(private service: ServiceService) { }
  Object=Object;
  Details: []=[];
  Data: object[];
  Batting: object[];
  Bowling: object[];
  BattListA: object[];
  BattFirstclass: object[];
  BattODIs: object[];
  BattT20s: object[];
  BattTests: object[];
  BowlListA: object[];
  BowlFirstclass: object[];
  BowlODIs: object[];
  BowlT20s: object[];
  BowlTests: object[];
  ngOnInit(): void {
    this.Id = sessionStorage.getItem('pId');
    this.service.getPlayerById(this.Id).subscribe(data => {
      let res = data;
      this.Details = res['result'];

      this.Data = this.Details['data'];

      this.Batting = this.Data['batting'];
      this.Bowling = this.Data['bowling'];


      this.BattListA = this.Batting['listA'];
      this.BattT20s = this.Batting['t20Is'];
      this.BattODIs = this.Batting['odIs'];
      this.BattTests = this.Batting['tests'];
      this.BattFirstclass = this.Batting['firstClass'];
      

      this.BowlListA = this.Bowling['listA'];
      this.BowlT20s = this.Bowling['t20Is'];
      this.BowlODIs = this.Bowling['odIs'];
      this.BowlTests = this.Bowling['tests'];
      this.BowlFirstclass = this.Bowling['firstClass'];


      
      // console.log(this.BattListA['fifty']);
      // console.log(this.Bowling);
      // console.log(this.BattTests);
    })
  }


  onBack(name){
    this.Name=name;
    sessionStorage.setItem('name', this.Name);

  }

}


