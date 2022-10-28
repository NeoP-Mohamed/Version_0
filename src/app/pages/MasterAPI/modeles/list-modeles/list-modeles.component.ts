import { Component, OnInit } from '@angular/core';
import { ModelesDto, ModelesService } from '../../../../shared/services/modeles.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-modeles',
  templateUrl: './list-modeles.component.html',
  styleUrls: ['./list-modeles.component.scss']
})
export class ListModelesComponent implements OnInit {
  modeles:ModelesDto|undefined;
  modeless:ModelesDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['dateCreation_Modele', 
'titre', 
'description', 
'missions', 
'Actions'];
   constructor(private modelesService:ModelesService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllModeles();
   }
 
   getModeles(){ 
       this.modelesService.getModeles(1)
         .subscribe((data: ModelesDto) => this.modeles = { ...data });  
   }
 
   getAllModeles(){ 
     this.modelesService.getAllModeles()
       .subscribe((data: Array<ModelesDto>) => {
         this.modeless = [...data]  ;
       this.resultsLength=this.modeless?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addModeles(){
    
  }
 }
