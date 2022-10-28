import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionRoutingModule } from './inscription-routing.module';
import { InscriptionMenuComponent } from './components/inscription-menu/inscription-menu.component';
import { AudioRecorderComponentI } from './components/inscription-teleoperateurs-steps/audio-recorder/audio-recorder.component';




@NgModule({
  declarations: [
    
    
   
  ],
  imports: [
    CommonModule,
    InscriptionRoutingModule
  ]
})
export class InscriptionModule { }
