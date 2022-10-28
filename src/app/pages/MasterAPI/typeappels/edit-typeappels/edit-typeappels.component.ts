import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-typeappels',
  templateUrl: './edit-typeappels.component.html',
  styleUrls: ['./edit-typeappels.component.scss']
})
export class EditTypeAppelsComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
