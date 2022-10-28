import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { Agendas__TeleoperateursService } from "../../../shared/services/agendas__teleoperateurs.service";
import { AddAgendas__TeleoperateursComponent } from "./add-agendas__teleoperateurs/add-agendas__teleoperateurs.component";
import { ListAgendas__TeleoperateursComponent } from "./list-agendas__teleoperateurs/list-agendas__teleoperateurs.component";
import { Agendas__TeleoperateursRoutingModule } from "./agendas__teleoperateurs-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditAgendas__TeleoperateursComponent } from "./edit-agendas__teleoperateurs/edit-agendas__teleoperateurs.component";

@NgModule({
  declarations: [
    ListAgendas__TeleoperateursComponent,
    AddAgendas__TeleoperateursComponent,
    EditAgendas__TeleoperateursComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Agendas__TeleoperateursRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [Agendas__TeleoperateursService],
})
export class Agendas__TeleoperateursModule { }
