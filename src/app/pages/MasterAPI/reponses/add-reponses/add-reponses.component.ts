import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddQuestionsComponent } from 'src/app/pages/MasterAPI/questions/add-questions/add-questions.component';
import { QuestionsDto, QuestionsService } from 'src/app/shared/services/questions.service';
import { ReponsesService, InputReponsesDto, ReponsesDto } from 'src/app/shared/services/reponses.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-reponses',
  templateUrl: './add-reponses.component.html',
  styleUrls: ['./add-reponses.component.scss']
})

export class AddReponsesComponent implements OnInit {
  public questionss: QuestionsDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idReponse: any = 0;
  reponsesDto: InputReponsesDto | undefined;
  public reponsesGroup = new FormGroup({
    questions : new FormControl('', [Validators.required]),
    reponse : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private questionsService: QuestionsService,
              private reponsesService: ReponsesService,
              public dialog: MatDialog, 
              private activatedroute: ActivatedRoute) { }

  openDialog() {
    const dialogRefQuestions = this.dialog.open(AddQuestionsComponent);

    dialogRefQuestions.afterClosed().subscribe(result => {
      this.getAllQuestions();
    });
  }
  
  getAllQuestions() {
    this.questionsService.getAllQuestions()
      .subscribe((data: Array<QuestionsDto>) => {
        this.questionss = [...data];
      });
  }
  getReponses(idReponse: number) {
    this.reponsesService.getEditReponses(idReponse).subscribe(res => {
      this.reponsesDto = res;      
      this.reponse?.setValue(res.reponse);        
      this.questions?.setValue(res.idQuestion, { onlySelf: true });
    });    
  }

  ngOnInit(): void {
    this.getAllQuestions();
    this.activatedroute.paramMap.subscribe(params => {
      this.idReponse = Number(params.get('idReponse'));
      this.getReponses(this.idReponse);
    });
  }

  onSubmit() {
    this.reponsesGroup.markAllAsTouched();
    if (this.reponsesGroup.valid) { 
     if(this.idReponse>0){
      var reponsesDto: InputReponsesDto = {
        idReponse: this.idReponse,        
        reponse: this.reponsesGroup.get('reponse')?.value,        
        idQuestion: this.reponsesGroup.get('questions')?.value
      }

      this.reponsesService.updateReponses(reponsesDto).subscribe(res => {
        this.toastr.success('Create reponses', 'Sucess');
      });
     }
     else{
      var reponsesDto: InputReponsesDto = {
        idReponse: this.idReponse,        
        reponse: this.reponsesGroup.get('reponse')?.value,        
        idQuestion: this.reponsesGroup.get('questions')?.value
      }

      this.reponsesService.createReponses(reponsesDto).subscribe(res => {
        this.toastr.success('Create reponses', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get reponse() { return this.reponsesGroup.get('reponse'); }  
  get questions() { return this.reponsesGroup.get('questions'); }
}