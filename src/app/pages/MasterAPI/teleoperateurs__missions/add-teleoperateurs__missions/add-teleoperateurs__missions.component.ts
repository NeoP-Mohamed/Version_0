import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddTeleoperateursComponent } from 'src/app/pages/MasterAPI/teleoperateurs/add-teleoperateurs/add-teleoperateurs.component';
import { TeleoperateursDto, TeleoperateursService } from 'src/app/shared/services/teleoperateurs.service';
import { AddMissionsComponent } from 'src/app/pages/MasterAPI/missions/add-missions/add-missions.component';
import { MissionsDto, MissionsService } from 'src/app/shared/services/missions.service';
import { Teleoperateurs__MissionsService, InputTeleoperateurs__MissionsDto, Teleoperateurs__MissionsDto } from 'src/app/shared/services/teleoperateurs__missions.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-teleoperateurs__missions',
  templateUrl: './add-teleoperateurs__missions.component.html',
  styleUrls: ['./add-teleoperateurs__missions.component.scss']
})

export class AddTeleoperateurs__MissionsComponent implements OnInit {
  public teleoperateurss: TeleoperateursDto[] | undefined;
  public missionss: MissionsDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idTeleoperateur_Mission: any = 0;
  teleoperateurs__missionsDto: InputTeleoperateurs__MissionsDto | undefined;
  public teleoperateurs__missionsGroup = new FormGroup({
    teleoperateurs : new FormControl('', [Validators.required]),
    missions : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private teleoperateursService: TeleoperateursService,
    private missionsService: MissionsService,
              private teleoperateurs__missionsService: Teleoperateurs__MissionsService,
              public dialog: MatDialog, 
              private activatedroute: ActivatedRoute) { }

  openDialog() {
    const dialogRefTeleoperateurs = this.dialog.open(AddTeleoperateursComponent);

    dialogRefTeleoperateurs.afterClosed().subscribe(result => {
      this.getAllTeleoperateurs();
    });
    const dialogRefMissions = this.dialog.open(AddMissionsComponent);

    dialogRefMissions.afterClosed().subscribe(result => {
      this.getAllMissions();
    });
  }
  
  getAllTeleoperateurs() {
    this.teleoperateursService.getAllTeleoperateurs()
      .subscribe((data: Array<TeleoperateursDto>) => {
        this.teleoperateurss = [...data];
      });
  }
  getAllMissions() {
    this.missionsService.getAllMissions()
      .subscribe((data: Array<MissionsDto>) => {
        this.missionss = [...data];
      });
  }
  getTeleoperateurs__Missions(idTeleoperateur_Mission: number) {
    this.teleoperateurs__missionsService.getEditTeleoperateurs__Missions(idTeleoperateur_Mission).subscribe(res => {
      this.teleoperateurs__missionsDto = res;      
      this.missions?.setValue(res.idMission, { onlySelf: true });      
      this.teleoperateurs?.setValue(res.idTeleoperateur, { onlySelf: true });
    });    
  }

  ngOnInit(): void {
    this.getAllTeleoperateurs();
    this.getAllMissions();
    this.activatedroute.paramMap.subscribe(params => {
      this.idTeleoperateur_Mission = Number(params.get('idTeleoperateur_Mission'));
      this.getTeleoperateurs__Missions(this.idTeleoperateur_Mission);
    });
  }

  onSubmit() {
    this.teleoperateurs__missionsGroup.markAllAsTouched();
    if (this.teleoperateurs__missionsGroup.valid) { 
     if(this.idTeleoperateur_Mission>0){
      var teleoperateurs__missionsDto: InputTeleoperateurs__MissionsDto = {
        idTeleoperateur_Mission: this.idTeleoperateur_Mission,        
        idMission: this.teleoperateurs__missionsGroup.get('missions')?.value,        
        idTeleoperateur: this.teleoperateurs__missionsGroup.get('teleoperateurs')?.value
      }

      this.teleoperateurs__missionsService.updateTeleoperateurs__Missions(teleoperateurs__missionsDto).subscribe(res => {
        this.toastr.success('Create teleoperateurs__missions', 'Sucess');
      });
     }
     else{
      var teleoperateurs__missionsDto: InputTeleoperateurs__MissionsDto = {
        idTeleoperateur_Mission: this.idTeleoperateur_Mission,        
        idMission: this.teleoperateurs__missionsGroup.get('missions')?.value,        
        idTeleoperateur: this.teleoperateurs__missionsGroup.get('teleoperateurs')?.value
      }

      this.teleoperateurs__missionsService.createTeleoperateurs__Missions(teleoperateurs__missionsDto).subscribe(res => {
        this.toastr.success('Create teleoperateurs__missions', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get missions() { return this.teleoperateurs__missionsGroup.get('missions'); }  
  get teleoperateurs() { return this.teleoperateurs__missionsGroup.get('teleoperateurs'); }
}