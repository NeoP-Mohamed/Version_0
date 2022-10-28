import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-avis',
  templateUrl: './edit-avis.component.html',
  styleUrls: ['./edit-avis.component.scss']
})
export class EditAvisComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
