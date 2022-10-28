import { Component, OnInit } from '@angular/core';
import { TypeAppelsDto, TypeAppelsService } from '../../../../shared/services/typeappels.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-typeappels',
  templateUrl: './list-typeappels.component.html',
  styleUrls: ['./list-typeappels.component.scss']
})
export class ListTypeAppelsComponent implements OnInit {
  typeappels:TypeAppelsDto|undefined;
  typeappelss:TypeAppelsDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['teleoperateurs', 
'libelle_Type_Appel', 
'nbre_Annee', 
'Actions'];
   constructor(private typeappelsService:TypeAppelsService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllTypeAppels();
   }
 
   getTypeAppels(){ 
       this.typeappelsService.getTypeAppels(1)
         .subscribe((data: TypeAppelsDto) => this.typeappels = { ...data });  
   }
 
   getAllTypeAppels(){ 
     this.typeappelsService.getAllTypeAppels()
       .subscribe((data: Array<TypeAppelsDto>) => {
         this.typeappelss = [...data]  ;
       this.resultsLength=this.typeappelss?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addTypeAppels(){
    
  }
 }
