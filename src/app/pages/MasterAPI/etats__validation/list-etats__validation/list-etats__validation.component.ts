import { Component, OnInit } from '@angular/core';
import { Etats__ValidationDto, Etats__ValidationService } from '../../../../shared/services/etats__validation.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-etats__validation',
  templateUrl: './list-etats__validation.component.html',
  styleUrls: ['./list-etats__validation.component.scss']
})
export class ListEtats__ValidationComponent implements OnInit {
  etats__validation:Etats__ValidationDto|undefined;
  etats__validations:Etats__ValidationDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['nom', 
'avec_Parametres', 
'Actions'];
   constructor(private etats__validationService:Etats__ValidationService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllEtats__Validation();
   }
 
   getEtats__Validation(){ 
       this.etats__validationService.getEtats__Validation(1)
         .subscribe((data: Etats__ValidationDto) => this.etats__validation = { ...data });  
   }
 
   getAllEtats__Validation(){ 
     this.etats__validationService.getAllEtats__Validation()
       .subscribe((data: Array<Etats__ValidationDto>) => {
         this.etats__validations = [...data]  ;
       this.resultsLength=this.etats__validations?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addEtats__Validation(){
    
  }
 }
