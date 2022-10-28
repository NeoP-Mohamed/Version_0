import { Component, OnInit } from '@angular/core';
import { ContratsDto, ContratsService } from '../../../../shared/services/contrats.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-contrats',
  templateUrl: './list-contrats.component.html',
  styleUrls: ['./list-contrats.component.scss']
})
export class ListContratsComponent implements OnInit {
  contrats:ContratsDto|undefined;
  contratss:ContratsDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['numero', 
'date_Signature', 
'contrat', 
'Actions'];
   constructor(private contratsService:ContratsService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllContrats();
   }
 
   getContrats(){ 
       this.contratsService.getContrats(1)
         .subscribe((data: ContratsDto) => this.contrats = { ...data });  
   }
 
   getAllContrats(){ 
     this.contratsService.getAllContrats()
       .subscribe((data: Array<ContratsDto>) => {
         this.contratss = [...data]  ;
       this.resultsLength=this.contratss?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addContrats(){
    
  }
 }
