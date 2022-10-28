import { Component, OnInit } from '@angular/core';
import { SocietesDto, SocietesService } from '../../../../shared/services/societes.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-societes',
  templateUrl: './list-societes.component.html',
  styleUrls: ['./list-societes.component.scss']
})
export class ListSocietesComponent implements OnInit {
  societes:SocietesDto|undefined;
  societess:SocietesDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['civilite', 
'nom', 
'prenom', 
'date_de_naissance', 
'nom_Societe', 
'pays', 
'domaine_Activite', 
'Actions'];
   constructor(private societesService:SocietesService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllSocietes();
   }
 
   getSocietes(){ 
       this.societesService.getSocietes(1)
         .subscribe((data: SocietesDto) => this.societes = { ...data });  
   }
 
   getAllSocietes(){ 
     this.societesService.getAllSocietes()
       .subscribe((data: Array<SocietesDto>) => {
         this.societess = [...data]  ;
       this.resultsLength=this.societess?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addSocietes(){
    
  }
 }
