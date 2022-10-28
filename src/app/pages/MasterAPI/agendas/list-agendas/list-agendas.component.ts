import { Component, OnInit } from '@angular/core';
import { AgendasDto, AgendasService } from '../../../../shared/services/agendas.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-agendas',
  templateUrl: './list-agendas.component.html',
  styleUrls: ['./list-agendas.component.scss']
})
export class ListAgendasComponent implements OnInit {
  agendas:AgendasDto|undefined;
  agendass:AgendasDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['teleoperateurs', 
'jour', 
'heure', 
'Actions'];
   constructor(private agendasService:AgendasService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllAgendas();
   }
 
   getAgendas(){ 
       this.agendasService.getAgendas(1)
         .subscribe((data: AgendasDto) => this.agendas = { ...data });  
   }
 
   getAllAgendas(){ 
     this.agendasService.getAllAgendas()
       .subscribe((data: Array<AgendasDto>) => {
         this.agendass = [...data]  ;
       this.resultsLength=this.agendass?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addAgendas(){
    
  }
 }
