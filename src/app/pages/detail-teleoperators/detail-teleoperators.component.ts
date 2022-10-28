import { Component, OnInit } from '@angular/core';
import db from '../../db.json'
@Component({
  selector: 'app-detail-teleoperators',
  templateUrl: './detail-teleoperators.component.html',
  styleUrls: ['./detail-teleoperators.component.scss']
})
export class DetailTeleoperatorsComponent implements OnInit {


  public db = db
  teleoperateurs: any;
  constructor() { }

  ngOnInit(): void {
    this.teleoperateurs = db.Teleoperateurs
    
  }
}
