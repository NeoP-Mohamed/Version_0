import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-abonnements',
  templateUrl: './edit-abonnements.component.html',
  styleUrls: ['./edit-abonnements.component.scss']
})
export class EditAbonnementsComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
