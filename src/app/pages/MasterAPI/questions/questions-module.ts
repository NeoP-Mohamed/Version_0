import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { QuestionsService } from "../../../shared/services/questions.service";
import { AddQuestionsComponent } from "./add-questions/add-questions.component";
import { ListQuestionsComponent } from "./list-questions/list-questions.component";
import { QuestionsRoutingModule } from "./questions-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditQuestionsComponent } from "./edit-questions/edit-questions.component";

@NgModule({
  declarations: [
    ListQuestionsComponent,
    AddQuestionsComponent,
    EditQuestionsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuestionsRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [QuestionsService],
})
export class QuestionsModule { }
