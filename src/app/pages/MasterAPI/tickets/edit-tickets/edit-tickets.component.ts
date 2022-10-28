import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-tickets',
  templateUrl: './edit-tickets.component.html',
  styleUrls: ['./edit-tickets.component.scss']
})
export class EditTicketsComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
