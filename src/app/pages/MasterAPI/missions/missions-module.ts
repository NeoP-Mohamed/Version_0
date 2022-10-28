import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { MissionsService } from "../../../shared/services/missions.service";
import { AddMissionsComponent } from "./add-missions/add-missions.component";
import { ListMissionsComponent } from "./list-missions/list-missions.component";
import { MissionsRoutingModule } from "./missions-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditMissionsComponent } from "./edit-missions/edit-missions.component";

import { SocietesService } from "../../../shared/services/societes.service";
//import { AddSocietesComponent } from "../societes/add-societes/add-societes.component";
@NgModule({
  declarations: [
    ListMissionsComponent,
    AddMissionsComponent,
    EditMissionsComponent

//,
//    AddSocietesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MissionsRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [MissionsService
, SocietesService],
})
export class MissionsModule { }
