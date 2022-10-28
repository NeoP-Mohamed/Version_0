import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { Teleoperateurs__MissionsService } from "../../../shared/services/teleoperateurs__missions.service";
import { AddTeleoperateurs__MissionsComponent } from "./add-teleoperateurs__missions/add-teleoperateurs__missions.component";
import { ListTeleoperateurs__MissionsComponent } from "./list-teleoperateurs__missions/list-teleoperateurs__missions.component";
import { Teleoperateurs__MissionsRoutingModule } from "./teleoperateurs__missions-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditTeleoperateurs__MissionsComponent } from "./edit-teleoperateurs__missions/edit-teleoperateurs__missions.component";

import { TeleoperateursService } from "../../../shared/services/teleoperateurs.service";
//import { AddTeleoperateursComponent } from "../teleoperateurs/add-teleoperateurs/add-teleoperateurs.component";
import { MissionsService } from "../../../shared/services/missions.service";
//import { AddMissionsComponent } from "../missions/add-missions/add-missions.component";
@NgModule({
  declarations: [
    ListTeleoperateurs__MissionsComponent,
    AddTeleoperateurs__MissionsComponent,
    EditTeleoperateurs__MissionsComponent

//,
//    AddTeleoperateursComponent

//,
//    AddMissionsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Teleoperateurs__MissionsRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [Teleoperateurs__MissionsService
, TeleoperateursService
, MissionsService],
})
export class Teleoperateurs__MissionsModule { }
