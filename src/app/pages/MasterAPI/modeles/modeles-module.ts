import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { ModelesService } from "../../../shared/services/modeles.service";
import { AddModelesComponent } from "./add-modeles/add-modeles.component";
import { ListModelesComponent } from "./list-modeles/list-modeles.component";
import { ModelesRoutingModule } from "./modeles-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditModelesComponent } from "./edit-modeles/edit-modeles.component";

import { MissionsService } from "../../../shared/services/missions.service";
//import { AddMissionsComponent } from "../missions/add-missions/add-missions.component";
import { TeleoperateursService } from "../../../shared/services/teleoperateurs.service";
//import { AddTeleoperateursComponent } from "../teleoperateurs/add-teleoperateurs/add-teleoperateurs.component";
@NgModule({
  declarations: [
    ListModelesComponent,
    AddModelesComponent,
    EditModelesComponent

//,
//    AddMissionsComponent

//,
//    AddTeleoperateursComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModelesRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [ModelesService
, MissionsService
, TeleoperateursService],
})
export class ModelesModule { }
