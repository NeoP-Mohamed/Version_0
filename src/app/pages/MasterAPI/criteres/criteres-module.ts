import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { CriteresService } from "../../../shared/services/criteres.service";
import { AddCriteresComponent } from "./add-criteres/add-criteres.component";
import { ListCriteresComponent } from "./list-criteres/list-criteres.component";
import { CriteresRoutingModule } from "./criteres-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditCriteresComponent } from "./edit-criteres/edit-criteres.component";

import { MissionsService } from "../../../shared/services/missions.service";
//import { AddMissionsComponent } from "../missions/add-missions/add-missions.component";
@NgModule({
  declarations: [
    ListCriteresComponent,
    AddCriteresComponent,
    EditCriteresComponent

//,
//    AddMissionsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CriteresRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [CriteresService
, MissionsService],
})
export class CriteresModule { }
