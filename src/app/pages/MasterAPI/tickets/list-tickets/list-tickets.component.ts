import { Component, OnInit } from '@angular/core';
import { TicketsDto, TicketsService } from '../../../../shared/services/tickets.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.scss']
})
export class ListTicketsComponent implements OnInit {
  tickets:TicketsDto|undefined;
  ticketss:TicketsDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['numero', 
'etat', 
'dateCreation_Ticket', 
'intitule_Ticket', 
'dateCloture_Ticket', 
'mission_Concerne', 
'evalution', 
'Actions'];
   constructor(private ticketsService:TicketsService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllTickets();
   }
 
   getTickets(){ 
       this.ticketsService.getTickets(1)
         .subscribe((data: TicketsDto) => this.tickets = { ...data });  
   }
 
   getAllTickets(){ 
     this.ticketsService.getAllTickets()
       .subscribe((data: Array<TicketsDto>) => {
         this.ticketss = [...data]  ;
       this.resultsLength=this.ticketss?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addTickets(){
    
  }
 }
