import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-contrats',
  templateUrl: './edit-contrats.component.html',
  styleUrls: ['./edit-contrats.component.scss']
})
export class EditContratsComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
