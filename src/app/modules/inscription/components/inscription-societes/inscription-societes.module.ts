import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionSocietesComponent } from '../inscription-societes/inscription-societes.component';
import { MaterialModule } from '../../../material/material.module';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { InscriptionModule } from '../../inscription.module';

@NgModule({
  declarations: [
    InscriptionSocietesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    InscriptionModule,
    ReactiveFormsModule,
    FormsModule
  ], 
  exports: [
    InscriptionSocietesComponent
  ]
})
export class InscriptionSocietesModule { }
