import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddTeleoperateursComponent } from 'src/app/pages/MasterAPI/teleoperateurs/add-teleoperateurs/add-teleoperateurs.component';
import { TeleoperateursDto, TeleoperateursService } from 'src/app/shared/services/teleoperateurs.service';
import { AddQuestionsComponent } from 'src/app/pages/MasterAPI/questions/add-questions/add-questions.component';
import { QuestionsDto, QuestionsService } from 'src/app/shared/services/questions.service';
import { AddReponsesComponent } from 'src/app/pages/MasterAPI/reponses/add-reponses/add-reponses.component';
import { ReponsesDto, ReponsesService } from 'src/app/shared/services/reponses.service';
import { QuestionnairesService, InputQuestionnairesDto, QuestionnairesDto } from 'src/app/shared/services/questionnaires.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-questionnaires',
  templateUrl: './add-questionnaires.component.html',
  styleUrls: ['./add-questionnaires.component.scss']
})

export class AddQuestionnairesComponent implements OnInit {
  public teleoperateurss: TeleoperateursDto[] | undefined;
  public questionss: QuestionsDto[] | undefined;
  public reponsess: ReponsesDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idQuestionnaire: any = 0;
  questionnairesDto: InputQuestionnairesDto | undefined;
  public questionnairesGroup = new FormGroup({
    teleoperateurs : new FormControl('', [Validators.required]),
    questions : new FormControl('', [Validators.required]),
    reponses : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private teleoperateursService: TeleoperateursService,
    private questionsService: QuestionsService,
    private reponsesService: ReponsesService,
              private questionnairesService: QuestionnairesService,
              public dialog: MatDialog, 
              private activatedroute: ActivatedRoute) { }

  openDialog() {
    const dialogRefTeleoperateurs = this.dialog.open(AddTeleoperateursComponent);

    dialogRefTeleoperateurs.afterClosed().subscribe(result => {
      this.getAllTeleoperateurs();
    });
    const dialogRefQuestions = this.dialog.open(AddQuestionsComponent);

    dialogRefQuestions.afterClosed().subscribe(result => {
      this.getAllQuestions();
    });
    const dialogRefReponses = this.dialog.open(AddReponsesComponent);

    dialogRefReponses.afterClosed().subscribe(result => {
      this.getAllReponses();
    });
  }
  
  getAllTeleoperateurs() {
    this.teleoperateursService.getAllTeleoperateurs()
      .subscribe((data: Array<TeleoperateursDto>) => {
        this.teleoperateurss = [...data];
      });
  }
  getAllQuestions() {
    this.questionsService.getAllQuestions()
      .subscribe((data: Array<QuestionsDto>) => {
        this.questionss = [...data];
      });
  }
  getAllReponses() {
    this.reponsesService.getAllReponses()
      .subscribe((data: Array<ReponsesDto>) => {
        this.reponsess = [...data];
      });
  }
  getQuestionnaires(idQuestionnaire: number) {
    this.questionnairesService.getEditQuestionnaires(idQuestionnaire).subscribe(res => {
      this.questionnairesDto = res;      
      this.questions?.setValue(res.idQuestion, { onlySelf: true });      
      this.teleoperateurs?.setValue(res.idTeleoperateur, { onlySelf: true });      
      this.reponses?.setValue(res.idReponse, { onlySelf: true });
    });    
  }

  ngOnInit(): void {
    this.getAllTeleoperateurs();
    this.getAllQuestions();
    this.getAllReponses();
    this.activatedroute.paramMap.subscribe(params => {
      this.idQuestionnaire = Number(params.get('idQuestionnaire'));
      this.getQuestionnaires(this.idQuestionnaire);
    });
  }

  onSubmit() {
    this.questionnairesGroup.markAllAsTouched();
    if (this.questionnairesGroup.valid) { 
     if(this.idQuestionnaire>0){
      var questionnairesDto: InputQuestionnairesDto = {
        idQuestionnaire: this.idQuestionnaire,        
        idQuestion: this.questionnairesGroup.get('questions')?.value,        
        idTeleoperateur: this.questionnairesGroup.get('teleoperateurs')?.value,        
        idReponse: this.questionnairesGroup.get('reponses')?.value
      }

      this.questionnairesService.updateQuestionnaires(questionnairesDto).subscribe(res => {
        this.toastr.success('Create questionnaires', 'Sucess');
      });
     }
     else{
      var questionnairesDto: InputQuestionnairesDto = {
        idQuestionnaire: this.idQuestionnaire,        
        idQuestion: this.questionnairesGroup.get('questions')?.value,        
        idTeleoperateur: this.questionnairesGroup.get('teleoperateurs')?.value,        
        idReponse: this.questionnairesGroup.get('reponses')?.value
      }

      this.questionnairesService.createQuestionnaires(questionnairesDto).subscribe(res => {
        this.toastr.success('Create questionnaires', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get questions() { return this.questionnairesGroup.get('questions'); }  
  get teleoperateurs() { return this.questionnairesGroup.get('teleoperateurs'); }  
  get reponses() { return this.questionnairesGroup.get('reponses'); }
}