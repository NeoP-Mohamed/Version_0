import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../../shared/material.module";
import { TeleoperateursService } from "../../../shared/services/teleoperateurs.service";
import { AddTeleoperateursComponent } from "./add-teleoperateurs/add-teleoperateurs.component";
import { DonneesBancairesComponent } from "./donnees-bancaires/donnees-bancaires.component";
import { HoraireTravailComponent } from "./horaire-travail/horaire-travail.component";
import { TypesMissionComponent } from "./types-mission/types-mission.component";
import { VotreVoixComponent } from "./votre-voix/votre-voix.component";
import { DonneesPersonnellesComponent } from "./donnees-personnelles/donnees-personnelles.component";
import { TextePresentationComponent } from "./texte-presentation/texte-presentation.component";
import { SecteursActiviteComponent } from "./secteurs-activite/secteurs-activite.component";
import { DonneesEntrepriseComponent } from "./donnees-entreprise/donnees-entreprise.component";
import { ListTeleoperateursComponent } from "./list-teleoperateurs/list-teleoperateurs.component";
import { TeleoperateursRoutingModule } from "./teleoperateurs-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditTeleoperateursComponent } from "./edit-teleoperateurs/edit-teleoperateurs.component";

@NgModule({
  declarations: [
    ListTeleoperateursComponent,
    AddTeleoperateursComponent,
    DonneesBancairesComponent,
    HoraireTravailComponent,
    TypesMissionComponent,
    VotreVoixComponent,
    DonneesPersonnellesComponent,
    TextePresentationComponent,
    SecteursActiviteComponent,
    DonneesEntrepriseComponent,
    EditTeleoperateursComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TeleoperateursRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [TeleoperateursService],
})
export class TeleoperateursModule { }
