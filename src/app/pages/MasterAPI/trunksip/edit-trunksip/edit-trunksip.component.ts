import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-trunksip',
  templateUrl: './edit-trunksip.component.html',
  styleUrls: ['./edit-trunksip.component.scss']
})
export class EditTrunkSIPComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
