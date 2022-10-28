import { Component, OnInit } from '@angular/core';
import { MissionsDto, MissionsService } from '../../../../shared/services/missions.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-missions',
  templateUrl: './list-missions.component.html',
  styleUrls: ['./list-missions.component.scss']
})
export class ListMissionsComponent implements OnInit {
  missions:MissionsDto|undefined;
  missionss:MissionsDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['societes', 
'numero', 
'visibilite_Mission', 
'nom_Mission', 
'type_Prospects', 
'type_Fichier', 
'pastille_Couleur', 
'besoin', 
'nbre_rdV_Mission', 
'rendez_Vous', 
'description', 
'script_Appel', 
'nbre_rdV_Teleoperateur', 
'budget', 
'email_Confirmation_rdv', 
'email_Rappel_rdv', 
'smS_Confirmation_rdv', 
'smS_Rappel_rdv', 
'email_Teleoperateur', 
'reception_sms', 
'reception_Fiche_rdv', 
'reception_Fiche_rdV_Commercial', 
'reception_Mail_Recapitulatif', 
'visualisation_rdV_Agenda', 
'visialisation_Itineraire', 
'duree_rdv', 
'unite_Duree_rdv', 
'nbre_Jour_Publication', 
'date_Debut_Mission', 
'Actions'];
   constructor(private missionsService:MissionsService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllMissions();
   }
 
   getMissions(){ 
       this.missionsService.getMissions(1)
         .subscribe((data: MissionsDto) => this.missions = { ...data });  
   }
 
   getAllMissions(){ 
     this.missionsService.getAllMissions()
       .subscribe((data: Array<MissionsDto>) => {
         this.missionss = [...data]  ;
       this.resultsLength=this.missionss?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addMissions(){
    
  }
 }
