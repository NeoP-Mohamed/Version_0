import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.scss']
})
export class EditQuestionsComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
