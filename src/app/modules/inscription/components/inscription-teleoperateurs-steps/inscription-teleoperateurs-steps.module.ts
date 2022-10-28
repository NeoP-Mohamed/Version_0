import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionTeleoperateursStepsComponent } from '../inscription-teleoperateurs-steps/inscription-teleoperateurs-steps.component';
import { MaterialModule } from '../../../material/material.module';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { AudioRecorderComponentI } from './audio-recorder/audio-recorder.component';

@NgModule({
  declarations: [
    InscriptionTeleoperateursStepsComponent,
    AudioRecorderComponentI
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ], 
  exports: [
    InscriptionTeleoperateursStepsComponent
  ]
})
export class InscriptionTeleoperateursStepsModule { }
