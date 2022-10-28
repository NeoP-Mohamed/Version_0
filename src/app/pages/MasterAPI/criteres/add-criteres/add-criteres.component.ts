import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddMissionsComponent } from 'src/app/pages/MasterAPI/missions/add-missions/add-missions.component';
import { MissionsDto, MissionsService } from 'src/app/shared/services/missions.service';
import { CriteresService, InputCriteresDto, CriteresDto } from 'src/app/shared/services/criteres.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-criteres',
  templateUrl: './add-criteres.component.html',
  styleUrls: ['./add-criteres.component.scss']
})

export class AddCriteresComponent implements OnInit {
  public missionss: MissionsDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idCritere: any = 0;
  criteresDto: InputCriteresDto | undefined;
  public criteresGroup = new FormGroup({
    missions : new FormControl('', [Validators.required]),
    libelle_Critere : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private missionsService: MissionsService,
              private criteresService: CriteresService,
              public dialog: MatDialog, 
              private activatedroute: ActivatedRoute) { }

  openDialog() {
    const dialogRefMissions = this.dialog.open(AddMissionsComponent);

    dialogRefMissions.afterClosed().subscribe(result => {
      this.getAllMissions();
    });
  }
  
  getAllMissions() {
    this.missionsService.getAllMissions()
      .subscribe((data: Array<MissionsDto>) => {
        this.missionss = [...data];
      });
  }
  getCriteres(idCritere: number) {
    this.criteresService.getEditCriteres(idCritere).subscribe(res => {
      this.criteresDto = res;      
      this.libelle_Critere?.setValue(res.libelle_Critere);        
      this.missions?.setValue(res.idMission, { onlySelf: true });
    });    
  }

  ngOnInit(): void {
    this.getAllMissions();
    this.activatedroute.paramMap.subscribe(params => {
      this.idCritere = Number(params.get('idCritere'));
      this.getCriteres(this.idCritere);
    });
  }

  onSubmit() {
    this.criteresGroup.markAllAsTouched();
    if (this.criteresGroup.valid) { 
     if(this.idCritere>0){
      var criteresDto: InputCriteresDto = {
        idCritere: this.idCritere,        
        libelle_Critere: this.criteresGroup.get('libelle_Critere')?.value,        
        idMission: this.criteresGroup.get('missions')?.value
      }

      this.criteresService.updateCriteres(criteresDto).subscribe(res => {
        this.toastr.success('Create criteres', 'Sucess');
      });
     }
     else{
      var criteresDto: InputCriteresDto = {
        idCritere: this.idCritere,        
        libelle_Critere: this.criteresGroup.get('libelle_Critere')?.value,        
        idMission: this.criteresGroup.get('missions')?.value
      }

      this.criteresService.createCriteres(criteresDto).subscribe(res => {
        this.toastr.success('Create criteres', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get libelle_Critere() { return this.criteresGroup.get('libelle_Critere'); }  
  get missions() { return this.criteresGroup.get('missions'); }
}