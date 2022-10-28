import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAbonnementRoutingModule } from './modal-abonnement-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';



@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    ModalAbonnementRoutingModule
  ]
})
export class ModalAbonnementModule { }
