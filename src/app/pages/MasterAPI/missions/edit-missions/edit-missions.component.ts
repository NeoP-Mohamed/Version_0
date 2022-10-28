import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-missions',
  templateUrl: './edit-missions.component.html',
  styleUrls: ['./edit-missions.component.scss']
})
export class EditMissionsComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
