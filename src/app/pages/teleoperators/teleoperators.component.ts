import { Component, OnInit } from '@angular/core';
import db from '../../db.json'
@Component({
  selector: 'app-teleoperators',
  templateUrl: './teleoperators.component.html',
  styleUrls: ['./teleoperators.component.scss']
})
export class TeleoperatorsComponent implements OnInit {
public db = db
  teleoperateurs: any;
  constructor() { }

  ngOnInit(): void {
    this.teleoperateurs = db.Teleoperateurs
    
  }

}
