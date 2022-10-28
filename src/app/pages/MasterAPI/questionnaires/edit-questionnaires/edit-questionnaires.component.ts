import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-questionnaires',
  templateUrl: './edit-questionnaires.component.html',
  styleUrls: ['./edit-questionnaires.component.scss']
})
export class EditQuestionnairesComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
