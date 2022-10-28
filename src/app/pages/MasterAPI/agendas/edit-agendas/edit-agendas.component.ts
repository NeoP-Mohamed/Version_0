import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-agendas',
  templateUrl: './edit-agendas.component.html',
  styleUrls: ['./edit-agendas.component.scss']
})
export class EditAgendasComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
