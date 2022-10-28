import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { QuestionnairesService } from "../../../shared/services/questionnaires.service";
import { AddQuestionnairesComponent } from "./add-questionnaires/add-questionnaires.component";
import { ListQuestionnairesComponent } from "./list-questionnaires/list-questionnaires.component";
import { QuestionnairesRoutingModule } from "./questionnaires-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditQuestionnairesComponent } from "./edit-questionnaires/edit-questionnaires.component";

import { TeleoperateursService } from "../../../shared/services/teleoperateurs.service";
//import { AddTeleoperateursComponent } from "../teleoperateurs/add-teleoperateurs/add-teleoperateurs.component";
import { QuestionsService } from "../../../shared/services/questions.service";
//import { AddQuestionsComponent } from "../questions/add-questions/add-questions.component";
import { ReponsesService } from "../../../shared/services/reponses.service";
//import { AddReponsesComponent } from "../reponses/add-reponses/add-reponses.component";
@NgModule({
  declarations: [
    ListQuestionnairesComponent,
    AddQuestionnairesComponent,
    EditQuestionnairesComponent

//,
//    AddTeleoperateursComponent

//,
//    AddQuestionsComponent

//,
//    AddReponsesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuestionnairesRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [QuestionnairesService
, TeleoperateursService
, QuestionsService
, ReponsesService],
})
export class QuestionnairesModule { }
