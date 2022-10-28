import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-secteuractivites',
  templateUrl: './edit-secteuractivites.component.html',
  styleUrls: ['./edit-secteuractivites.component.scss']
})
export class EditSecteurActivitesComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
