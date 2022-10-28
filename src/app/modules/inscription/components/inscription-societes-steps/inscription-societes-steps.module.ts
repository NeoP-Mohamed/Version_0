import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionSocietesStepsComponent } from '../inscription-societes-steps/inscription-societes-steps.component';
import { MaterialModule } from '../../../material/material.module';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InscriptionSocietesStepsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ], 
  exports: [
    InscriptionSocietesStepsComponent
  ]
})
export class InscriptionSocietesStepsModule { }
