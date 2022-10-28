import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { TicketsService } from "../../../shared/services/tickets.service";
import { AddTicketsComponent } from "./add-tickets/add-tickets.component";
import { ListTicketsComponent } from "./list-tickets/list-tickets.component";
import { TicketsRoutingModule } from "./tickets-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditTicketsComponent } from "./edit-tickets/edit-tickets.component";

import { TeleoperateursService } from "../../../shared/services/teleoperateurs.service";
//import { AddTeleoperateursComponent } from "../teleoperateurs/add-teleoperateurs/add-teleoperateurs.component";
@NgModule({
  declarations: [
    ListTicketsComponent,
    AddTicketsComponent,
    EditTicketsComponent

//,
//    AddTeleoperateursComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TicketsRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [TicketsService
, TeleoperateursService],
})
export class TicketsModule { }
