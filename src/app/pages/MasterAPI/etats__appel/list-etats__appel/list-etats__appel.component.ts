import { Component, OnInit } from '@angular/core';
import { Etats__AppelDto, Etats__AppelService } from '../../../../shared/services/etats__appel.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-etats__appel',
  templateUrl: './list-etats__appel.component.html',
  styleUrls: ['./list-etats__appel.component.scss']
})
export class ListEtats__AppelComponent implements OnInit {
  etats__appel:Etats__AppelDto|undefined;
  etats__appels:Etats__AppelDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['nom', 
'type_Etat', 
'type_Mission', 
'fichier_Cible', 
'Actions'];
   constructor(private etats__appelService:Etats__AppelService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllEtats__Appel();
   }
 
   getEtats__Appel(){ 
       this.etats__appelService.getEtats__Appel(1)
         .subscribe((data: Etats__AppelDto) => this.etats__appel = { ...data });  
   }
 
   getAllEtats__Appel(){ 
     this.etats__appelService.getAllEtats__Appel()
       .subscribe((data: Array<Etats__AppelDto>) => {
         this.etats__appels = [...data]  ;
       this.resultsLength=this.etats__appels?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addEtats__Appel(){
    
  }
 }
