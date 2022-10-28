import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { AgendasService } from "../../../shared/services/agendas.service";
import { AddAgendasComponent } from "./add-agendas/add-agendas.component";
import { ListAgendasComponent } from "./list-agendas/list-agendas.component";
import { AgendasRoutingModule } from "./agendas-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditAgendasComponent } from "./edit-agendas/edit-agendas.component";

import { TeleoperateursService } from "../../../shared/services/teleoperateurs.service";
//import { AddTeleoperateursComponent } from "../teleoperateurs/add-teleoperateurs/add-teleoperateurs.component";
@NgModule({
  declarations: [
    ListAgendasComponent,
    AddAgendasComponent,
    EditAgendasComponent

//,
//    AddTeleoperateursComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgendasRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [AgendasService
, TeleoperateursService],
})
export class AgendasModule { }
