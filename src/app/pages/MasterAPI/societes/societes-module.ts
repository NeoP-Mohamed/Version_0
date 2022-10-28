import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { SocietesService } from "../../../shared/services/societes.service";
import { AddSocietesComponent } from "./add-societes/add-societes.component";
import { ListSocietesComponent } from "./list-societes/list-societes.component";
import { SocietesRoutingModule } from "./societes-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditSocietesComponent } from "./edit-societes/edit-societes.component";

@NgModule({
  declarations: [
    ListSocietesComponent,
    AddSocietesComponent,
    EditSocietesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SocietesRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [SocietesService],
})
export class SocietesModule { }
