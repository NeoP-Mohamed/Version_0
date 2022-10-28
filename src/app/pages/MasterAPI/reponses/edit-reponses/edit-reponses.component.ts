import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-reponses',
  templateUrl: './edit-reponses.component.html',
  styleUrls: ['./edit-reponses.component.scss']
})
export class EditReponsesComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
