import { Component, OnInit } from '@angular/core';
import { Agendas__TeleoperateursDto, Agendas__TeleoperateursService } from '../../../../shared/services/agendas__teleoperateurs.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-agendas__teleoperateurs',
  templateUrl: './list-agendas__teleoperateurs.component.html',
  styleUrls: ['./list-agendas__teleoperateurs.component.scss']
})
export class ListAgendas__TeleoperateursComponent implements OnInit {
  agendas__teleoperateurs:Agendas__TeleoperateursDto|undefined;
  agendas__teleoperateurss:Agendas__TeleoperateursDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['nom', 
'pays', 
'synchronisation', 
'missions', 
'Actions'];
   constructor(private agendas__teleoperateursService:Agendas__TeleoperateursService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllAgendas__Teleoperateurs();
   }
 
   getAgendas__Teleoperateurs(){ 
       this.agendas__teleoperateursService.getAgendas__Teleoperateurs(1)
         .subscribe((data: Agendas__TeleoperateursDto) => this.agendas__teleoperateurs = { ...data });  
   }
 
   getAllAgendas__Teleoperateurs(){ 
     this.agendas__teleoperateursService.getAllAgendas__Teleoperateurs()
       .subscribe((data: Array<Agendas__TeleoperateursDto>) => {
         this.agendas__teleoperateurss = [...data]  ;
       this.resultsLength=this.agendas__teleoperateurss?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addAgendas__Teleoperateurs(){
    
  }
 }
