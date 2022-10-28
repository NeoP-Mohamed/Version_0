import { Component, OnInit } from '@angular/core';
import { TypeProspectsDto, TypeProspectsService } from '../../../../shared/services/typeprospects.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-typeprospects',
  templateUrl: './list-typeprospects.component.html',
  styleUrls: ['./list-typeprospects.component.scss']
})
export class ListTypeProspectsComponent implements OnInit {
  typeprospects:TypeProspectsDto|undefined;
  typeprospectss:TypeProspectsDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['societes', 
'libelle_Type_Prospect', 
'Actions'];
   constructor(private typeprospectsService:TypeProspectsService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllTypeProspects();
   }
 
   getTypeProspects(){ 
       this.typeprospectsService.getTypeProspects(1)
         .subscribe((data: TypeProspectsDto) => this.typeprospects = { ...data });  
   }
 
   getAllTypeProspects(){ 
     this.typeprospectsService.getAllTypeProspects()
       .subscribe((data: Array<TypeProspectsDto>) => {
         this.typeprospectss = [...data]  ;
       this.resultsLength=this.typeprospectss?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addTypeProspects(){
    
  }
 }
