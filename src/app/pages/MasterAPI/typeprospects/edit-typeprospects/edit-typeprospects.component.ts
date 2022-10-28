import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-typeprospects',
  templateUrl: './edit-typeprospects.component.html',
  styleUrls: ['./edit-typeprospects.component.scss']
})
export class EditTypeProspectsComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
