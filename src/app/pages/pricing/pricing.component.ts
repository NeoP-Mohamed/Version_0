import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAbonnementComponent } from '../subscriptions/modal-abonnement/modal-abonnement.component';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

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
