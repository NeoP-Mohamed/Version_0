import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { SecteurActivitesService } from "../../../shared/services/secteuractivites.service";
import { AddSecteurActivitesComponent } from "./add-secteuractivites/add-secteuractivites.component";
import { ListSecteurActivitesComponent } from "./list-secteuractivites/list-secteuractivites.component";
import { SecteurActivitesRoutingModule } from "./secteuractivites-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditSecteurActivitesComponent } from "./edit-secteuractivites/edit-secteuractivites.component";

import { TeleoperateursService } from "../../../shared/services/teleoperateurs.service";
//import { AddTeleoperateursComponent } from "../teleoperateurs/add-teleoperateurs/add-teleoperateurs.component";
@NgModule({
  declarations: [
    ListSecteurActivitesComponent,
    AddSecteurActivitesComponent,
    EditSecteurActivitesComponent

//,
//    AddTeleoperateursComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SecteurActivitesRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [SecteurActivitesService
, TeleoperateursService],
})
export class SecteurActivitesModule { }
