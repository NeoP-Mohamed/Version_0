import { Component, OnInit } from '@angular/core';
import { CriteresDto, CriteresService } from '../../../../shared/services/criteres.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-criteres',
  templateUrl: './list-criteres.component.html',
  styleUrls: ['./list-criteres.component.scss']
})
export class ListCriteresComponent implements OnInit {
  criteres:CriteresDto|undefined;
  criteress:CriteresDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['missions', 
'libelle_Critere', 
'Actions'];
   constructor(private criteresService:CriteresService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllCriteres();
   }
 
   getCriteres(){ 
       this.criteresService.getCriteres(1)
         .subscribe((data: CriteresDto) => this.criteres = { ...data });  
   }
 
   getAllCriteres(){ 
     this.criteresService.getAllCriteres()
       .subscribe((data: Array<CriteresDto>) => {
         this.criteress = [...data]  ;
       this.resultsLength=this.criteress?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addCriteres(){
    
  }
 }
