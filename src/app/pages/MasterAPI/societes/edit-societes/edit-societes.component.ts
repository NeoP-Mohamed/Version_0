import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-societes',
  templateUrl: './edit-societes.component.html',
  styleUrls: ['./edit-societes.component.scss']
})
export class EditSocietesComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
