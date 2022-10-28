import { Component, OnInit } from '@angular/core';
import { TypeMissionsDto, TypeMissionsService } from '../../../../shared/services/typemissions.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-typemissions',
  templateUrl: './list-typemissions.component.html',
  styleUrls: ['./list-typemissions.component.scss']
})
export class ListTypeMissionsComponent implements OnInit {
  typemissions:TypeMissionsDto|undefined;
  typemissionss:TypeMissionsDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['teleoperateurs', 
'libelle_Type_Mission', 
'libelle_Type_Prospect', 
'type_Mission_Souhaitee', 
'Actions'];
   constructor(private typemissionsService:TypeMissionsService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllTypeMissions();
   }
 
   getTypeMissions(){ 
       this.typemissionsService.getTypeMissions(1)
         .subscribe((data: TypeMissionsDto) => this.typemissions = { ...data });  
   }
 
   getAllTypeMissions(){ 
     this.typemissionsService.getAllTypeMissions()
       .subscribe((data: Array<TypeMissionsDto>) => {
         this.typemissionss = [...data]  ;
       this.resultsLength=this.typemissionss?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addTypeMissions(){
    
  }
 }
