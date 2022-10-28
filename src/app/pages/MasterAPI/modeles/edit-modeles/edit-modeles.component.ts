import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-modeles',
  templateUrl: './edit-modeles.component.html',
  styleUrls: ['./edit-modeles.component.scss']
})
export class EditModelesComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
