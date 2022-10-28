import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from '../shared/material.module';

import { DetailMissionComponent } from './detail-mission/detail-mission.component';
import { AudioRecordersComponent } from './detail-teleoperators/audio-recorder/audio-recorder.component';
import { DetailTeleoperatorsComponent } from './detail-teleoperators/detail-teleoperators.component';
import { MissionsComponent } from './missions/missions.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AudioRecorderComponent } from './profile/audio-recorder/audio-recorder.component';
import { ProfileComponent } from './profile/profile.component';
import { ModalAbonnementComponent } from './subscriptions/modal-abonnement/modal-abonnement.component';
import { TeleoperatorsComponent } from './teleoperators/teleoperators.component';


@NgModule({
  declarations: [
    PagesComponent,
    ProfileComponent,
    MissionsComponent,
    TeleoperatorsComponent,
    DetailMissionComponent,
    DetailTeleoperatorsComponent,
    ModalAbonnementComponent,
    AudioRecorderComponent,
    AudioRecordersComponent,
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MaterialModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    FontAwesomeModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
})
export class PagesModule { }
