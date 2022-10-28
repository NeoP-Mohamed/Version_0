import { Component, OnInit } from '@angular/core';
import { faFile, faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import db from '../../db.json'
@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent implements OnInit {
  //faCoffee = faCoffee;
  pen=faPen;
  user=faUser;
  pages=faFile;
  missions: any;
  //home=faHome
  
  constructor() { }
  public db=db
  ngOnInit(): void {
    console.log('data',this.db.Missions)
   this.missions=this.db.Missions
  }

 

}
