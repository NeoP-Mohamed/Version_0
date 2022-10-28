import { Component, OnInit } from '@angular/core';
import { AbonnementsDto, AbonnementsService } from '../../../../shared/services/abonnements.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-abonnements',
  templateUrl: './list-abonnements.component.html',
  styleUrls: ['./list-abonnements.component.scss']
})
export class ListAbonnementsComponent implements OnInit {
  abonnements:AbonnementsDto|undefined;
  abonnementss:AbonnementsDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['libelle_Abonnement', 
'prix', 
'periode_Engagement', 
'commission', 
'Actions'];
   constructor(private abonnementsService:AbonnementsService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllAbonnements();
   }
 
   getAbonnements(){ 
       this.abonnementsService.getAbonnements(1)
         .subscribe((data: AbonnementsDto) => this.abonnements = { ...data });  
   }
 
   getAllAbonnements(){ 
     this.abonnementsService.getAllAbonnements()
       .subscribe((data: Array<AbonnementsDto>) => {
         this.abonnementss = [...data]  ;
       this.resultsLength=this.abonnementss?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addAbonnements(){
    
  }
 }
