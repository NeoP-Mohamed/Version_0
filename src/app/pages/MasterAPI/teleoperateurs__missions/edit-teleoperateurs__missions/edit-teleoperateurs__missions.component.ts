import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-teleoperateurs__missions',
  templateUrl: './edit-teleoperateurs__missions.component.html',
  styleUrls: ['./edit-teleoperateurs__missions.component.scss']
})
export class EditTeleoperateurs__MissionsComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
