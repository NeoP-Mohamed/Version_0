import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-teleoperateurs',
  templateUrl: './edit-teleoperateurs.component.html',
  styleUrls: ['./edit-teleoperateurs.component.scss']
})
export class EditTeleoperateursComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
