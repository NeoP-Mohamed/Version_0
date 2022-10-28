import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-etats__validation',
  templateUrl: './edit-etats__validation.component.html',
  styleUrls: ['./edit-etats__validation.component.scss']
})
export class EditEtats__ValidationComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
