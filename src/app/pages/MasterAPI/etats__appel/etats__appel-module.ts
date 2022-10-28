import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { Etats__AppelService } from "../../../shared/services/etats__appel.service";
import { AddEtats__AppelComponent } from "./add-etats__appel/add-etats__appel.component";
import { ListEtats__AppelComponent } from "./list-etats__appel/list-etats__appel.component";
import { Etats__AppelRoutingModule } from "./etats__appel-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditEtats__AppelComponent } from "./edit-etats__appel/edit-etats__appel.component";

import { TeleoperateursService } from "../../../shared/services/teleoperateurs.service";
//import { AddTeleoperateursComponent } from "../teleoperateurs/add-teleoperateurs/add-teleoperateurs.component";
@NgModule({
  declarations: [
    ListEtats__AppelComponent,
    AddEtats__AppelComponent,
    EditEtats__AppelComponent

//,
//    AddTeleoperateursComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Etats__AppelRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [Etats__AppelService
, TeleoperateursService],
})
export class Etats__AppelModule { }
