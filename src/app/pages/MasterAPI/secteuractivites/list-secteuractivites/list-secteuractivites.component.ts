import { Component, OnInit } from '@angular/core';
import { SecteurActivitesDto, SecteurActivitesService } from '../../../../shared/services/secteuractivites.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-secteuractivites',
  templateUrl: './list-secteuractivites.component.html',
  styleUrls: ['./list-secteuractivites.component.scss']
})
export class ListSecteurActivitesComponent implements OnInit {
  secteuractivites:SecteurActivitesDto|undefined;
  secteuractivitess:SecteurActivitesDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['teleoperateurs', 
'libelle_Type_Secteur_Activite', 
'secteur_Activite_Souhaitee', 
'Actions'];
   constructor(private secteuractivitesService:SecteurActivitesService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllSecteurActivites();
   }
 
   getSecteurActivites(){ 
       this.secteuractivitesService.getSecteurActivites(1)
         .subscribe((data: SecteurActivitesDto) => this.secteuractivites = { ...data });  
   }
 
   getAllSecteurActivites(){ 
     this.secteuractivitesService.getAllSecteurActivites()
       .subscribe((data: Array<SecteurActivitesDto>) => {
         this.secteuractivitess = [...data]  ;
       this.resultsLength=this.secteuractivitess?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addSecteurActivites(){
    
  }
 }
