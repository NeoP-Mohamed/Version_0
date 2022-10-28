import { Component, OnInit } from '@angular/core';
import { AvisDto, AvisService } from '../../../../shared/services/avis.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-avis',
  templateUrl: './list-avis.component.html',
  styleUrls: ['./list-avis.component.scss']
})
export class ListAvisComponent implements OnInit {
  avis:AvisDto|undefined;
  aviss:AvisDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['teleoperateurs', 
'societes', 
'missions', 
'note', 
'commentaire', 
'Actions'];
   constructor(private avisService:AvisService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllAvis();
   }
 
   getAvis(){ 
       this.avisService.getAvis(1)
         .subscribe((data: AvisDto) => this.avis = { ...data });  
   }
 
   getAllAvis(){ 
     this.avisService.getAllAvis()
       .subscribe((data: Array<AvisDto>) => {
         this.aviss = [...data]  ;
       this.resultsLength=this.aviss?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addAvis(){
    
  }
 }
