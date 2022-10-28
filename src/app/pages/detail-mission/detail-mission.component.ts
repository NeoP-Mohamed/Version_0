import { Component, OnInit } from '@angular/core';
import db from '../../db.json'
@Component({
  selector: 'app-detail-mission',
  templateUrl: './detail-mission.component.html',
  styleUrls: ['./detail-mission.component.scss']
})
export class DetailMissionComponent implements OnInit {
  detailMission:any;
  constructor() { }
public db =db
  ngOnInit(): void {
    this.detailMission = db.Teleoperateurs__Missions
  }

}
