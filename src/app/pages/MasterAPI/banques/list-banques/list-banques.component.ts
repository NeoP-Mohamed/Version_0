import { Component, OnInit } from '@angular/core';
import { BanquesDto, BanquesService } from '../../../../shared/services/banques.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-banques',
  templateUrl: './list-banques.component.html',
  styleUrls: ['./list-banques.component.scss']
})
export class ListBanquesComponent implements OnInit {
  banques:BanquesDto|undefined;
  banquess:BanquesDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['teleoperateurs', 
'type', 
'iban', 
'Actions'];
   constructor(private banquesService:BanquesService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllBanques();
   }
 
   getBanques(){ 
       this.banquesService.getBanques(1)
         .subscribe((data: BanquesDto) => this.banques = { ...data });  
   }
 
   getAllBanques(){ 
     this.banquesService.getAllBanques()
       .subscribe((data: Array<BanquesDto>) => {
         this.banquess = [...data]  ;
       this.resultsLength=this.banquess?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addBanques(){
    
  }
 }
