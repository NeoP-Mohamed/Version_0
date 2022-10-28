import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-banques',
  templateUrl: './edit-banques.component.html',
  styleUrls: ['./edit-banques.component.scss']
})
export class EditBanquesComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
