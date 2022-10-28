import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';

import { AbonnementsService } from './shared/services/abonnements.service';
import { AgendasService } from './shared/services/agendas.service';
import { Agendas__TeleoperateursService } from './shared/services/agendas__teleoperateurs.service';
import { AvisService } from './shared/services/avis.service';
import { BanquesService } from './shared/services/banques.service';
import { Boite__EnvoieService } from './shared/services/boite__envoie.service';
import { ContratsService } from './shared/services/contrats.service';
import { CriteresService } from './shared/services/criteres.service';
import { Etats__AppelService } from './shared/services/etats__appel.service';
import { Etats__ValidationService } from './shared/services/etats__validation.service';
import { MissionsService } from './shared/services/missions.service';
import { ModelesService } from './shared/services/modeles.service';
import { Moyens__PaiementService } from './shared/services/moyens__paiement.service';
import { OptionsService } from './shared/services/options.service';
import { QuestionnairesService } from './shared/services/questionnaires.service';
import { QuestionsService } from './shared/services/questions.service';
import { ReponsesService } from './shared/services/reponses.service';
import { SecteurActivitesService } from './shared/services/secteuractivites.service';
import { SocietesService } from './shared/services/societes.service';
import { TeleoperateursService } from './shared/services/teleoperateurs.service';
import { Teleoperateurs__MissionsService } from './shared/services/teleoperateurs__missions.service';
import { TicketsService } from './shared/services/tickets.service';
import { TrunkSIPService } from './shared/services/trunksip.service';
import { TypeAppelsService } from './shared/services/typeappels.service';
import { TypeMissionsService } from './shared/services/typemissions.service';
import { TypeProspectsService } from './shared/services/typeprospects.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuItems } from './shared/menu-item/menu-item';
import { HomeComponentI } from './modules/home/home.component';
import { HeaderComponentI } from './header/header.component';
import { FooterComponentI } from './footer/footer.component';
import { InscriptionComponent } from './modules/inscription/inscription.component';
import { InscriptionTeleoperateursModule } from './modules/inscription/components/inscription-teleoperateurs/inscription-teleoperateurs.module';
import { InscriptionTeleoperateursStepsModule } from './modules/inscription/components/inscription-teleoperateurs-steps/inscription-teleoperateurs-steps.module';
import { InscriptionSocietesModule } from './modules/inscription/components/inscription-societes/inscription-societes.module';
import { InscriptionSocietesStepsModule } from './modules/inscription/components/inscription-societes-steps/inscription-societes-steps.module';
import { InscriptionTerminerModule } from './modules/inscription/components/inscription-terminer/inscription-terminer.module';
import { InscriptionModule } from './modules/inscription/inscription.module';
import { InscriptionMenuComponent } from './modules/inscription/components/inscription-menu/inscription-menu.component';
import { AudioRecorderComponent } from './pages/profile/audio-recorder/audio-recorder.component';
import { AudioRecorderComponentI } from './modules/inscription/components/inscription-teleoperateurs-steps/audio-recorder/audio-recorder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    FooterComponentI,
    HeaderComponentI,
    //InscriptionComponent,
    HomeComponentI,
    InscriptionMenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule,
   // InscriptionModule,
    // InscriptionTeleoperateursModule,
    // InscriptionTeleoperateursStepsModule,
    // InscriptionSocietesModule,
    // InscriptionSocietesStepsModule,
   // InscriptionTerminerModule,
   ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
MenuItems],
  bootstrap: [AppComponent],
  exports:[InscriptionMenuComponent]
})
export class AppModule { }


