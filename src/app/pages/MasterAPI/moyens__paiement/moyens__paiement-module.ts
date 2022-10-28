import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { Moyens__PaiementService } from "../../../shared/services/moyens__paiement.service";
import { AddMoyens__PaiementComponent } from "./add-moyens__paiement/add-moyens__paiement.component";
import { ListMoyens__PaiementComponent } from "./list-moyens__paiement/list-moyens__paiement.component";
import { Moyens__PaiementRoutingModule } from "./moyens__paiement-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditMoyens__PaiementComponent } from "./edit-moyens__paiement/edit-moyens__paiement.component";

import { TeleoperateursService } from "../../../shared/services/teleoperateurs.service";
//import { AddTeleoperateursComponent } from "../teleoperateurs/add-teleoperateurs/add-teleoperateurs.component";
@NgModule({
  declarations: [
    ListMoyens__PaiementComponent,
    AddMoyens__PaiementComponent,
    EditMoyens__PaiementComponent

//,
//    AddTeleoperateursComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Moyens__PaiementRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [Moyens__PaiementService
, TeleoperateursService],
})
export class Moyens__PaiementModule { }
