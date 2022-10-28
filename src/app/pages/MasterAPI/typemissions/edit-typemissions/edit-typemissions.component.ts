import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-typemissions',
  templateUrl: './edit-typemissions.component.html',
  styleUrls: ['./edit-typemissions.component.scss']
})
export class EditTypeMissionsComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
