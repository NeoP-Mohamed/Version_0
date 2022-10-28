import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { QuestionsService, InputQuestionsDto, QuestionsDto } from 'src/app/shared/services/questions.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})

export class AddQuestionsComponent implements OnInit {
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idQuestion: any = 0;
  questionsDto: InputQuestionsDto | undefined;
  public questionsGroup = new FormGroup({
    question : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
              private questionsService: QuestionsService,
              public dialog: MatDialog, 
              private activatedroute: ActivatedRoute) { }

  openDialog() {
  }
  
  getQuestions(idQuestion: number) {
    this.questionsService.getEditQuestions(idQuestion).subscribe(res => {
      this.questionsDto = res;      
      this.question?.setValue(res.question);  
    });    
  }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.idQuestion = Number(params.get('idQuestion'));
      this.getQuestions(this.idQuestion);
    });
  }

  onSubmit() {
    this.questionsGroup.markAllAsTouched();
    if (this.questionsGroup.valid) { 
     if(this.idQuestion>0){
      var questionsDto: InputQuestionsDto = {
        idQuestion: this.idQuestion,        
        question: this.questionsGroup.get('question')?.value
      }

      this.questionsService.updateQuestions(questionsDto).subscribe(res => {
        this.toastr.success('Create questions', 'Sucess');
      });
     }
     else{
      var questionsDto: InputQuestionsDto = {
        idQuestion: this.idQuestion,        
        question: this.questionsGroup.get('question')?.value
      }

      this.questionsService.createQuestions(questionsDto).subscribe(res => {
        this.toastr.success('Create questions', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get question() { return this.questionsGroup.get('question'); }
}