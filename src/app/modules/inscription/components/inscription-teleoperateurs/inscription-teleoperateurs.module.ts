import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionTeleoperateursComponent } from '../inscription-teleoperateurs/inscription-teleoperateurs.component';
import { MaterialModule } from '../../../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InscriptionModule } from '../../inscription.module';

@NgModule({
  declarations: [
    InscriptionTeleoperateursComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    InscriptionModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    InscriptionTeleoperateursComponent
  ]
})
export class InscriptionTeleoperateursModule { }
