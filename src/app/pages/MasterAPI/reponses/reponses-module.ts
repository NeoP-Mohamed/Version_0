import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { ReponsesService } from "../../../shared/services/reponses.service";
import { AddReponsesComponent } from "./add-reponses/add-reponses.component";
import { ListReponsesComponent } from "./list-reponses/list-reponses.component";
import { ReponsesRoutingModule } from "./reponses-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditReponsesComponent } from "./edit-reponses/edit-reponses.component";

import { QuestionsService } from "../../../shared/services/questions.service";
//import { AddQuestionsComponent } from "../questions/add-questions/add-questions.component";
@NgModule({
  declarations: [
    ListReponsesComponent,
    AddReponsesComponent,
    EditReponsesComponent

//,
//    AddQuestionsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReponsesRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [ReponsesService
, QuestionsService],
})
export class ReponsesModule { }
