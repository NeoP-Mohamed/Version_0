import { Component, OnInit } from '@angular/core';
import { TeleoperateursDto, TeleoperateursService } from '../../../../shared/services/teleoperateurs.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-teleoperateurs',
  templateUrl: './list-teleoperateurs.component.html',
  styleUrls: ['./list-teleoperateurs.component.scss']
})
export class ListTeleoperateursComponent implements OnInit {
  teleoperateurs:TeleoperateursDto|undefined;
  teleoperateurss:TeleoperateursDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['civilite', 
'nom', 
'prenom', 
'date_de_naissance', 
'adresse', 
'cp', 
'ville', 
'tel_Portable', 
'Actions'];
   constructor(private teleoperateursService:TeleoperateursService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllTeleoperateurs();
   }
 
   getTeleoperateurs(){ 
       this.teleoperateursService.getTeleoperateurs(1)
         .subscribe((data: TeleoperateursDto) => this.teleoperateurs = { ...data });  
   }
 
   getAllTeleoperateurs(){ 
     this.teleoperateursService.getAllTeleoperateurs()
       .subscribe((data: Array<TeleoperateursDto>) => {
         this.teleoperateurss = [...data]  ;
       this.resultsLength=this.teleoperateurss?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addTeleoperateurs(){
    
  }
 }
