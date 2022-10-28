import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { BanquesService } from "../../../shared/services/banques.service";
import { AddBanquesComponent } from "./add-banques/add-banques.component";
import { ListBanquesComponent } from "./list-banques/list-banques.component";
import { BanquesRoutingModule } from "./banques-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditBanquesComponent } from "./edit-banques/edit-banques.component";

import { TeleoperateursService } from "../../../shared/services/teleoperateurs.service";
//import { AddTeleoperateursComponent } from "../teleoperateurs/add-teleoperateurs/add-teleoperateurs.component";
@NgModule({
  declarations: [
    ListBanquesComponent,
    AddBanquesComponent,
    EditBanquesComponent

//,
//    AddTeleoperateursComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BanquesRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [BanquesService
, TeleoperateursService],
})
export class BanquesModule { }
