import { Component, OnInit } from '@angular/core';
import { QuestionnairesDto, QuestionnairesService } from '../../../../shared/services/questionnaires.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-questionnaires',
  templateUrl: './list-questionnaires.component.html',
  styleUrls: ['./list-questionnaires.component.scss']
})
export class ListQuestionnairesComponent implements OnInit {
  questionnaires:QuestionnairesDto|undefined;
  questionnairess:QuestionnairesDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['teleoperateurs', 
'questions', 
'reponses', 
'Actions'];
   constructor(private questionnairesService:QuestionnairesService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllQuestionnaires();
   }
 
   getQuestionnaires(){ 
       this.questionnairesService.getQuestionnaires(1)
         .subscribe((data: QuestionnairesDto) => this.questionnaires = { ...data });  
   }
 
   getAllQuestionnaires(){ 
     this.questionnairesService.getAllQuestionnaires()
       .subscribe((data: Array<QuestionnairesDto>) => {
         this.questionnairess = [...data]  ;
       this.resultsLength=this.questionnairess?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addQuestionnaires(){
    
  }
 }
