import { Component, OnInit } from '@angular/core';
import { ReponsesDto, ReponsesService } from '../../../../shared/services/reponses.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-reponses',
  templateUrl: './list-reponses.component.html',
  styleUrls: ['./list-reponses.component.scss']
})
export class ListReponsesComponent implements OnInit {
  reponses:ReponsesDto|undefined;
  reponsess:ReponsesDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['questions', 
'reponse', 
'Actions'];
   constructor(private reponsesService:ReponsesService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllReponses();
   }
 
   getReponses(){ 
       this.reponsesService.getReponses(1)
         .subscribe((data: ReponsesDto) => this.reponses = { ...data });  
   }
 
   getAllReponses(){ 
     this.reponsesService.getAllReponses()
       .subscribe((data: Array<ReponsesDto>) => {
         this.reponsess = [...data]  ;
       this.resultsLength=this.reponsess?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addReponses(){
    
  }
 }
