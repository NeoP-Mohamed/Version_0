import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { TypeMissionsService } from "../../../shared/services/typemissions.service";
import { AddTypeMissionsComponent } from "./add-typemissions/add-typemissions.component";
import { ListTypeMissionsComponent } from "./list-typemissions/list-typemissions.component";
import { TypeMissionsRoutingModule } from "./typemissions-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditTypeMissionsComponent } from "./edit-typemissions/edit-typemissions.component";

import { TeleoperateursService } from "../../../shared/services/teleoperateurs.service";
//import { AddTeleoperateursComponent } from "../teleoperateurs/add-teleoperateurs/add-teleoperateurs.component";
@NgModule({
  declarations: [
    ListTypeMissionsComponent,
    AddTypeMissionsComponent,
    EditTypeMissionsComponent

//,
//    AddTeleoperateursComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TypeMissionsRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [TypeMissionsService
, TeleoperateursService],
})
export class TypeMissionsModule { }
