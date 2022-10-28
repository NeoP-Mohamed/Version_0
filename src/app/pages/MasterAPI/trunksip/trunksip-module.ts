import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { TrunkSIPService } from "../../../shared/services/trunksip.service";
import { AddTrunkSIPComponent } from "./add-trunksip/add-trunksip.component";
import { ListTrunkSIPComponent } from "./list-trunksip/list-trunksip.component";
import { TrunkSIPRoutingModule } from "./trunksip-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditTrunkSIPComponent } from "./edit-trunksip/edit-trunksip.component";

import { TeleoperateursService } from "../../../shared/services/teleoperateurs.service";
//import { AddTeleoperateursComponent } from "../teleoperateurs/add-teleoperateurs/add-teleoperateurs.component";
@NgModule({
  declarations: [
    ListTrunkSIPComponent,
    AddTrunkSIPComponent,
    EditTrunkSIPComponent

//,
//    AddTeleoperateursComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TrunkSIPRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [TrunkSIPService
, TeleoperateursService],
})
export class TrunkSIPModule { }
