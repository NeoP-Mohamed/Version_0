import { Component, OnInit } from '@angular/core';
import { Moyens__PaiementDto, Moyens__PaiementService } from '../../../../shared/services/moyens__paiement.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-moyens__paiement',
  templateUrl: './list-moyens__paiement.component.html',
  styleUrls: ['./list-moyens__paiement.component.scss']
})
export class ListMoyens__PaiementComponent implements OnInit {
  moyens__paiement:Moyens__PaiementDto|undefined;
  moyens__paiements:Moyens__PaiementDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['teleoperateurs', 
'intitule', 
'numero_Carte', 
'date_Ajout', 
'date_Expiration', 
'cryptogramme', 
'etat', 
'carte_Favorite', 
'Actions'];
   constructor(private moyens__paiementService:Moyens__PaiementService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllMoyens__Paiement();
   }
 
   getMoyens__Paiement(){ 
       this.moyens__paiementService.getMoyens__Paiement(1)
         .subscribe((data: Moyens__PaiementDto) => this.moyens__paiement = { ...data });  
   }
 
   getAllMoyens__Paiement(){ 
     this.moyens__paiementService.getAllMoyens__Paiement()
       .subscribe((data: Array<Moyens__PaiementDto>) => {
         this.moyens__paiements = [...data]  ;
       this.resultsLength=this.moyens__paiements?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addMoyens__Paiement(){
    
  }
 }
