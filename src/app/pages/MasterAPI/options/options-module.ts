import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { OptionsService } from "../../../shared/services/options.service";
import { AddOptionsComponent } from "./add-options/add-options.component";
import { ListOptionsComponent } from "./list-options/list-options.component";
import { OptionsRoutingModule } from "./options-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditOptionsComponent } from "./edit-options/edit-options.component";

import { AbonnementsService } from "../../../shared/services/abonnements.service";
//import { AddAbonnementsComponent } from "../abonnements/add-abonnements/add-abonnements.component";
@NgModule({
  declarations: [
    ListOptionsComponent,
    AddOptionsComponent,
    EditOptionsComponent

//,
//    AddAbonnementsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OptionsRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [OptionsService
, AbonnementsService],
})
export class OptionsModule { }
