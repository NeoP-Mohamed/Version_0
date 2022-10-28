import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { TypeAppelsService } from "../../../shared/services/typeappels.service";
import { AddTypeAppelsComponent } from "./add-typeappels/add-typeappels.component";
import { ListTypeAppelsComponent } from "./list-typeappels/list-typeappels.component";
import { TypeAppelsRoutingModule } from "./typeappels-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditTypeAppelsComponent } from "./edit-typeappels/edit-typeappels.component";

import { TeleoperateursService } from "../../../shared/services/teleoperateurs.service";
//import { AddTeleoperateursComponent } from "../teleoperateurs/add-teleoperateurs/add-teleoperateurs.component";
@NgModule({
  declarations: [
    ListTypeAppelsComponent,
    AddTypeAppelsComponent,
    EditTypeAppelsComponent

//,
//    AddTeleoperateursComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TypeAppelsRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [TypeAppelsService
, TeleoperateursService],
})
export class TypeAppelsModule { }
