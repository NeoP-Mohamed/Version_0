import { Component, OnInit } from '@angular/core';
import { Boite__EnvoieDto, Boite__EnvoieService } from '../../../../shared/services/boite__envoie.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-boite__envoie',
  templateUrl: './list-boite__envoie.component.html',
  styleUrls: ['./list-boite__envoie.component.scss']
})
export class ListBoite__EnvoieComponent implements OnInit {
  boite__envoie:Boite__EnvoieDto|undefined;
  boite__envoies:Boite__EnvoieDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['titre', 
'etat', 
'dateCreation_Boite', 
'boiteGmail', 
'email', 
'identifiant', 
'mdp', 
'serveur_smtp', 
'port_smtp', 
'securite', 
'Actions'];
   constructor(private boite__envoieService:Boite__EnvoieService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllBoite__Envoie();
   }
 
   getBoite__Envoie(){ 
       this.boite__envoieService.getBoite__Envoie(1)
         .subscribe((data: Boite__EnvoieDto) => this.boite__envoie = { ...data });  
   }
 
   getAllBoite__Envoie(){ 
     this.boite__envoieService.getAllBoite__Envoie()
       .subscribe((data: Array<Boite__EnvoieDto>) => {
         this.boite__envoies = [...data]  ;
       this.resultsLength=this.boite__envoies?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addBoite__Envoie(){
    
  }
 }
