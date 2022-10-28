import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-etats__appel',
  templateUrl: './edit-etats__appel.component.html',
  styleUrls: ['./edit-etats__appel.component.scss']
})
export class EditEtats__AppelComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
