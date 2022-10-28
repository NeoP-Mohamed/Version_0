import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { AbonnementsService } from "../../../shared/services/abonnements.service";
import { AddAbonnementsComponent } from "./add-abonnements/add-abonnements.component";
import { ListAbonnementsComponent } from "./list-abonnements/list-abonnements.component";
import { AbonnementsRoutingModule } from "./abonnements-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditAbonnementsComponent } from "./edit-abonnements/edit-abonnements.component";

import { TeleoperateursService } from "../../../shared/services/teleoperateurs.service";
//import { AddTeleoperateursComponent } from "../teleoperateurs/add-teleoperateurs/add-teleoperateurs.component";
@NgModule({
  declarations: [
    ListAbonnementsComponent,
    AddAbonnementsComponent,
    EditAbonnementsComponent

//,
//    AddTeleoperateursComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AbonnementsRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [AbonnementsService
, TeleoperateursService],
})
export class AbonnementsModule { }
