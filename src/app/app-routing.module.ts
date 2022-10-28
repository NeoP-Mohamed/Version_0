import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeComponentI } from './modules/home/home.component';
import { InscriptionComponent } from './modules/inscription/inscription.component';
import { InscriptionModule } from './modules/inscription/inscription.module';

const routes: Routes = [
  {
    path:'',
    component:HomeComponentI,
    children:[
      {
     
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
      },
      {
        path: 'Inscription',
        loadChildren: () => import('./modules/inscription/inscription.module').then(m => m.InscriptionModule),
      },
    ]},
    {path:'',
    component:HomeComponent,
    children:[
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
      },
      
      {
        path: 'ModalAbonnementModule',
        loadChildren: () => import('./pages/subscriptions/modal-abonnement/modal-abonnement.module').then(m => m.ModalAbonnementModule),
      },
      {
        path: 'login',
        loadChildren: () => import('./pages/authentication/login/login.module').then(m => m.LoginModule),
      },
      { path: 'Pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },

      { path: 'Abonnements', loadChildren: () => import('./pages/MasterAPI/abonnements/abonnements-module').then(m => m.AbonnementsModule) },
      { path: 'Agendas', loadChildren: () => import('./pages/MasterAPI/agendas/agendas-module').then(m => m.AgendasModule) },
      { path: 'Agendas__Teleoperateurs', loadChildren: () => import('./pages/MasterAPI/agendas__teleoperateurs/agendas__teleoperateurs-module').then(m => m.Agendas__TeleoperateursModule) },
      { path: 'Avis', loadChildren: () => import('./pages/MasterAPI/avis/avis-module').then(m => m.AvisModule) },
      { path: 'Banques', loadChildren: () => import('./pages/MasterAPI/banques/banques-module').then(m => m.BanquesModule) },
      { path: 'Boite__Envoie', loadChildren: () => import('./pages/MasterAPI/boite__envoie/boite__envoie-module').then(m => m.Boite__EnvoieModule) },
      { path: 'Contrats', loadChildren: () => import('./pages/MasterAPI/contrats/contrats-module').then(m => m.ContratsModule) },
      { path: 'Criteres', loadChildren: () => import('./pages/MasterAPI/criteres/criteres-module').then(m => m.CriteresModule) },
      { path: 'Etats__Appel', loadChildren: () => import('./pages/MasterAPI/etats__appel/etats__appel-module').then(m => m.Etats__AppelModule) },
      { path: 'Etats__Validation', loadChildren: () => import('./pages/MasterAPI/etats__validation/etats__validation-module').then(m => m.Etats__ValidationModule) },
      { path: 'Missions', loadChildren: () => import('./pages/MasterAPI/missions/missions-module').then(m => m.MissionsModule) },
      { path: 'Modeles', loadChildren: () => import('./pages/MasterAPI/modeles/modeles-module').then(m => m.ModelesModule) },
      { path: 'Moyens__Paiement', loadChildren: () => import('./pages/MasterAPI/moyens__paiement/moyens__paiement-module').then(m => m.Moyens__PaiementModule) },
      { path: 'Options', loadChildren: () => import('./pages/MasterAPI/options/options-module').then(m => m.OptionsModule) },
      { path: 'Questionnaires', loadChildren: () => import('./pages/MasterAPI/questionnaires/questionnaires-module').then(m => m.QuestionnairesModule) },
      { path: 'Questions', loadChildren: () => import('./pages/MasterAPI/questions/questions-module').then(m => m.QuestionsModule) },
      { path: 'Reponses', loadChildren: () => import('./pages/MasterAPI/reponses/reponses-module').then(m => m.ReponsesModule) },
      { path: 'SecteurActivites', loadChildren: () => import('./pages/MasterAPI/secteuractivites/secteuractivites-module').then(m => m.SecteurActivitesModule) },
      { path: 'Societes', loadChildren: () => import('./pages/MasterAPI/societes/societes-module').then(m => m.SocietesModule) },
      { path: 'Teleoperateurs', loadChildren: () => import('./pages/MasterAPI/teleoperateurs/teleoperateurs-module').then(m => m.TeleoperateursModule) },
      { path: 'Teleoperateurs__Missions', loadChildren: () => import('./pages/MasterAPI/teleoperateurs__missions/teleoperateurs__missions-module').then(m => m.Teleoperateurs__MissionsModule) },
      { path: 'Tickets', loadChildren: () => import('./pages/MasterAPI/tickets/tickets-module').then(m => m.TicketsModule) },
      { path: 'TrunkSIP', loadChildren: () => import('./pages/MasterAPI/trunksip/trunksip-module').then(m => m.TrunkSIPModule) },
      { path: 'TypeAppels', loadChildren: () => import('./pages/MasterAPI/typeappels/typeappels-module').then(m => m.TypeAppelsModule) },
      { path: 'TypeMissions', loadChildren: () => import('./pages/MasterAPI/typemissions/typemissions-module').then(m => m.TypeMissionsModule) },
      { path: 'TypeProspects', loadChildren: () => import('./pages/MasterAPI/typeprospects/typeprospects-module').then(m => m.TypeProspectsModule) },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

