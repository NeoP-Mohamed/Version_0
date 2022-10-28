import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-agendas__teleoperateurs',
  templateUrl: './edit-agendas__teleoperateurs.component.html',
  styleUrls: ['./edit-agendas__teleoperateurs.component.scss']
})
export class EditAgendas__TeleoperateursComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
