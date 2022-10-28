import { Component, OnInit } from '@angular/core';
import { TrunkSIPDto, TrunkSIPService } from '../../../../shared/services/trunksip.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-trunksip',
  templateUrl: './list-trunksip.component.html',
  styleUrls: ['./list-trunksip.component.scss']
})
export class ListTrunkSIPComponent implements OnInit {
  trunksip:TrunkSIPDto|undefined;
  trunksips:TrunkSIPDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['intitule', 
'nom_Utilisateur', 
'domaine', 
'etat', 
'Actions'];
   constructor(private trunksipService:TrunkSIPService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllTrunkSIP();
   }
 
   getTrunkSIP(){ 
       this.trunksipService.getTrunkSIP(1)
         .subscribe((data: TrunkSIPDto) => this.trunksip = { ...data });  
   }
 
   getAllTrunkSIP(){ 
     this.trunksipService.getAllTrunkSIP()
       .subscribe((data: Array<TrunkSIPDto>) => {
         this.trunksips = [...data]  ;
       this.resultsLength=this.trunksips?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addTrunkSIP(){
    
  }
 }
