import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { TypeProspectsService } from "../../../shared/services/typeprospects.service";
import { AddTypeProspectsComponent } from "./add-typeprospects/add-typeprospects.component";
import { ListTypeProspectsComponent } from "./list-typeprospects/list-typeprospects.component";
import { TypeProspectsRoutingModule } from "./typeprospects-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditTypeProspectsComponent } from "./edit-typeprospects/edit-typeprospects.component";

import { SocietesService } from "../../../shared/services/societes.service";
//import { AddSocietesComponent } from "../societes/add-societes/add-societes.component";
@NgModule({
  declarations: [
    ListTypeProspectsComponent,
    AddTypeProspectsComponent,
    EditTypeProspectsComponent

//,
//    AddSocietesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TypeProspectsRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [TypeProspectsService
, SocietesService],
})
export class TypeProspectsModule { }
