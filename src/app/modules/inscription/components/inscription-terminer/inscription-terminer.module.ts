import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionTerminerComponent } from '../inscription-terminer/inscription-terminer.component';
import { MaterialModule } from '../../../material/material.module';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InscriptionTerminerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ], 
  exports: [
    InscriptionTerminerComponent
  ]
})
export class InscriptionTerminerModule { }
