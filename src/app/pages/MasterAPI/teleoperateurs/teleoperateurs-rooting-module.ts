import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeleoperateursComponent } from './add-teleoperateurs/add-teleoperateurs.component';
import { DonneesBancairesComponent } from './donnees-bancaires/donnees-bancaires.component';
import { HoraireTravailComponent } from './horaire-travail/horaire-travail.component';
import { TypesMissionComponent } from './types-mission/types-mission.component';
import { VotreVoixComponent } from './votre-voix/votre-voix.component';
import { DonneesPersonnellesComponent } from './donnees-personnelles/donnees-personnelles.component';
import { TextePresentationComponent } from './texte-presentation/texte-presentation.component';
import { SecteursActiviteComponent } from './secteurs-activite/secteurs-activite.component';
import { DonneesEntrepriseComponent } from './donnees-entreprise/donnees-entreprise.component';
import { ListTeleoperateursComponent } from './list-teleoperateurs/list-teleoperateurs.component';

const routes: Routes = [
    
    {
        path: 'List',
        component: ListTeleoperateursComponent
    },
    {
        path: 'add',
        component: AddTeleoperateursComponent
    },
    {
        path: ':id',
        component: AddTeleoperateursComponent
    },
    {
        path: 'donnees-bancaires',
        component: DonneesBancairesComponent
    }
,
    {
        path: 'horaire-travail',
        component: HoraireTravailComponent
    }
,
    {
        path: 'types-mission',
        component: TypesMissionComponent
    }
,
    {
        path: 'votre-voix',
        component: VotreVoixComponent
    }
,
    {
        path: 'donnees-personnelles',
        component: DonneesPersonnellesComponent
    }
,
    {
        path: 'texte-presentation',
        component: TextePresentationComponent
    }
,
    {
        path: 'secteurs-activite',
        component: SecteursActiviteComponent
    }
,
    {
        path: 'donnees-entreprise',
        component: DonneesEntrepriseComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeleoperateursRoutingModule { }


