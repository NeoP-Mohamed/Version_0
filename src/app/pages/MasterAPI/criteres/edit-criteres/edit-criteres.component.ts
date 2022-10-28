import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-criteres',
  templateUrl: './edit-criteres.component.html',
  styleUrls: ['./edit-criteres.component.scss']
})
export class EditCriteresComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
