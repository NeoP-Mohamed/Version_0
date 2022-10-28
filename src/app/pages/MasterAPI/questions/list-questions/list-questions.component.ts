import { Component, OnInit } from '@angular/core';
import { QuestionsDto, QuestionsService } from '../../../../shared/services/questions.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.scss']
})
export class ListQuestionsComponent implements OnInit {
  questions:QuestionsDto|undefined;
  questionss:QuestionsDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['question', 
'Actions'];
   constructor(private questionsService:QuestionsService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllQuestions();
   }
 
   getQuestions(){ 
       this.questionsService.getQuestions(1)
         .subscribe((data: QuestionsDto) => this.questions = { ...data });  
   }
 
   getAllQuestions(){ 
     this.questionsService.getAllQuestions()
       .subscribe((data: Array<QuestionsDto>) => {
         this.questionss = [...data]  ;
       this.resultsLength=this.questionss?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addQuestions(){
    
  }
 }
