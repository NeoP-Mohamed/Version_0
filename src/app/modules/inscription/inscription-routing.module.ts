import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionSocietesComponent } from './components/inscription-societes/inscription-societes.component';
import { InscriptionSocietesStepsComponent } from './components/inscription-societes-steps/inscription-societes-steps.component';
import { InscriptionTerminerComponent } from './components/inscription-terminer/inscription-terminer.component';
import { InscriptionTeleoperateursComponent } from './components/inscription-teleoperateurs/inscription-teleoperateurs.component';
import { InscriptionTeleoperateursStepsComponent } from './components/inscription-teleoperateurs-steps/inscription-teleoperateurs-steps.component';
import { InscriptionComponent } from './inscription.component';
import { InscriptionMenuComponent } from './components/inscription-menu/inscription-menu.component';

const routes: Routes = [
  { path: '', component: InscriptionComponent },
  
  { path: 'InscriptionMenuComponent', component: InscriptionMenuComponent },
  { path: 'teleoperateurs', component: InscriptionTeleoperateursComponent },
  { path: 'teleoperateurssteps', component: InscriptionTeleoperateursStepsComponent },
  { path: 'societes', component: InscriptionSocietesComponent },
  { path: 'societessteps', component: InscriptionSocietesStepsComponent },
  { path: 'terminer', component: InscriptionTerminerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriptionRoutingModule { }
