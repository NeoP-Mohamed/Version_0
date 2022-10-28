import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-moyens__paiement',
  templateUrl: './edit-moyens__paiement.component.html',
  styleUrls: ['./edit-moyens__paiement.component.scss']
})
export class EditMoyens__PaiementComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
