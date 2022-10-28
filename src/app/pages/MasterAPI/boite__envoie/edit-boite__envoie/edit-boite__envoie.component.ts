import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-boite__envoie',
  templateUrl: './edit-boite__envoie.component.html',
  styleUrls: ['./edit-boite__envoie.component.scss']
})
export class EditBoite__EnvoieComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
