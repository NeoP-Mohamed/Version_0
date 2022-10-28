import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { Etats__ValidationService } from "../../../shared/services/etats__validation.service";
import { AddEtats__ValidationComponent } from "./add-etats__validation/add-etats__validation.component";
import { ListEtats__ValidationComponent } from "./list-etats__validation/list-etats__validation.component";
import { Etats__ValidationRoutingModule } from "./etats__validation-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditEtats__ValidationComponent } from "./edit-etats__validation/edit-etats__validation.component";

import { TeleoperateursService } from "../../../shared/services/teleoperateurs.service";
//import { AddTeleoperateursComponent } from "../teleoperateurs/add-teleoperateurs/add-teleoperateurs.component";
@NgModule({
  declarations: [
    ListEtats__ValidationComponent,
    AddEtats__ValidationComponent,
    EditEtats__ValidationComponent

//,
//    AddTeleoperateursComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Etats__ValidationRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [Etats__ValidationService
, TeleoperateursService],
})
export class Etats__ValidationModule { }
