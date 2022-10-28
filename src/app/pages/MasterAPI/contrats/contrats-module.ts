import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { ContratsService } from "../../../shared/services/contrats.service";
import { AddContratsComponent } from "./add-contrats/add-contrats.component";
import { ListContratsComponent } from "./list-contrats/list-contrats.component";
import { ContratsRoutingModule } from "./contrats-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditContratsComponent } from "./edit-contrats/edit-contrats.component";

import { TeleoperateursService } from "../../../shared/services/teleoperateurs.service";
//import { AddTeleoperateursComponent } from "../teleoperateurs/add-teleoperateurs/add-teleoperateurs.component";
@NgModule({
  declarations: [
    ListContratsComponent,
    AddContratsComponent,
    EditContratsComponent

//,
//    AddTeleoperateursComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContratsRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [ContratsService
, TeleoperateursService],
})
export class ContratsModule { }
