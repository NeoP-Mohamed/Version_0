import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { AvisService } from "../../../shared/services/avis.service";
import { AddAvisComponent } from "./add-avis/add-avis.component";
import { ListAvisComponent } from "./list-avis/list-avis.component";
import { AvisRoutingModule } from "./avis-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditAvisComponent } from "./edit-avis/edit-avis.component";

import { TeleoperateursService } from "../../../shared/services/teleoperateurs.service";
//import { AddTeleoperateursComponent } from "../teleoperateurs/add-teleoperateurs/add-teleoperateurs.component";
import { SocietesService } from "../../../shared/services/societes.service";
//import { AddSocietesComponent } from "../societes/add-societes/add-societes.component";
import { MissionsService } from "../../../shared/services/missions.service";
//import { AddMissionsComponent } from "../missions/add-missions/add-missions.component";
@NgModule({
  declarations: [
    ListAvisComponent,
    AddAvisComponent,
    EditAvisComponent

//,
//    AddTeleoperateursComponent

//,
//    AddSocietesComponent

//,
//    AddMissionsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AvisRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [AvisService
, TeleoperateursService
, SocietesService
, MissionsService],
})
export class AvisModule { }
