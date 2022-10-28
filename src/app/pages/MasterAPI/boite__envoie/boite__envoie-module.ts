import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { Boite__EnvoieService } from "../../../shared/services/boite__envoie.service";
import { AddBoite__EnvoieComponent } from "./add-boite__envoie/add-boite__envoie.component";
import { ListBoite__EnvoieComponent } from "./list-boite__envoie/list-boite__envoie.component";
import { Boite__EnvoieRoutingModule } from "./boite__envoie-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditBoite__EnvoieComponent } from "./edit-boite__envoie/edit-boite__envoie.component";

import { TeleoperateursService } from "../../../shared/services/teleoperateurs.service";
//import { AddTeleoperateursComponent } from "../teleoperateurs/add-teleoperateurs/add-teleoperateurs.component";
@NgModule({
  declarations: [
    ListBoite__EnvoieComponent,
    AddBoite__EnvoieComponent,
    EditBoite__EnvoieComponent

//,
//    AddTeleoperateursComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Boite__EnvoieRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [Boite__EnvoieService
, TeleoperateursService],
})
export class Boite__EnvoieModule { }
