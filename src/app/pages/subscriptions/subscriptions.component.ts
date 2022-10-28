import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAbonnementComponent } from './modal-abonnement/modal-abonnement.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openModalAbonnement(): void {
    const dialogRef = this.dialog.open(ModalAbonnementComponent,  {
      width: '35vw', 
      height:'50.5vh', 
      maxWidth: '100vw', 
      maxHeight: '100vh', 
   
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    
    });
  }
}
