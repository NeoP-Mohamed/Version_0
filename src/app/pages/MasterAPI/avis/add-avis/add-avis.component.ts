import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddTeleoperateursComponent } from 'src/app/pages/MasterAPI/teleoperateurs/add-teleoperateurs/add-teleoperateurs.component';
import { TeleoperateursDto, TeleoperateursService } from 'src/app/shared/services/teleoperateurs.service';
import { AddSocietesComponent } from 'src/app/pages/MasterAPI/societes/add-societes/add-societes.component';
import { SocietesDto, SocietesService } from 'src/app/shared/services/societes.service';
import { AddMissionsComponent } from 'src/app/pages/MasterAPI/missions/add-missions/add-missions.component';
import { MissionsDto, MissionsService } from 'src/app/shared/services/missions.service';
import { AvisService, InputAvisDto, AvisDto } from 'src/app/shared/services/avis.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-avis',
  templateUrl: './add-avis.component.html',
  styleUrls: ['./add-avis.component.scss']
})

export class AddAvisComponent implements OnInit {
  public teleoperateurss: TeleoperateursDto[] | undefined;
  public societess: SocietesDto[] | undefined;
  public missionss: MissionsDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idAvis: any = 0;
  avisDto: InputAvisDto | undefined;
  public avisGroup = new FormGroup({
    teleoperateurs : new FormControl('', [Validators.required]),
    societes : new FormControl('', [Validators.required]),
    missions : new FormControl('', [Validators.required]),
    note : new FormControl('', [Validators.required]),
    commentaire : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private teleoperateursService: TeleoperateursService,
    private societesService: SocietesService,
    private missionsService: MissionsService,
              private avisService: AvisService,
              public dialog: MatDialog, 
              private activatedroute: ActivatedRoute) { }

  openDialog() {
    const dialogRefTeleoperateurs = this.dialog.open(AddTeleoperateursComponent);

    dialogRefTeleoperateurs.afterClosed().subscribe(result => {
      this.getAllTeleoperateurs();
    });
    const dialogRefSocietes = this.dialog.open(AddSocietesComponent);

    dialogRefSocietes.afterClosed().subscribe(result => {
      this.getAllSocietes();
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
  getAllSocietes() {
    this.societesService.getAllSocietes()
      .subscribe((data: Array<SocietesDto>) => {
        this.societess = [...data];
      });
  }
  getAllMissions() {
    this.missionsService.getAllMissions()
      .subscribe((data: Array<MissionsDto>) => {
        this.missionss = [...data];
      });
  }
  getAvis(idAvis: number) {
    this.avisService.getEditAvis(idAvis).subscribe(res => {
      this.avisDto = res;      
      this.commentaire?.setValue(res.commentaire);        
      this.societes?.setValue(res.idSociete, { onlySelf: true });      
      this.missions?.setValue(res.idMission, { onlySelf: true });      
      this.teleoperateurs?.setValue(res.idTeleoperateur, { onlySelf: true });      
      this.note?.setValue(res.note);  
    });    
  }

  ngOnInit(): void {
    this.getAllTeleoperateurs();
    this.getAllSocietes();
    this.getAllMissions();
    this.activatedroute.paramMap.subscribe(params => {
      this.idAvis = Number(params.get('idAvis'));
      this.getAvis(this.idAvis);
    });
  }

  onSubmit() {
    this.avisGroup.markAllAsTouched();
    if (this.avisGroup.valid) { 
     if(this.idAvis>0){
      var avisDto: InputAvisDto = {
        idAvis: this.idAvis,        
        commentaire: this.avisGroup.get('commentaire')?.value,        
        idSociete: this.avisGroup.get('societes')?.value,        
        idMission: this.avisGroup.get('missions')?.value,        
        idTeleoperateur: this.avisGroup.get('teleoperateurs')?.value,        
        note: this.avisGroup.get('note')?.value
      }

      this.avisService.updateAvis(avisDto).subscribe(res => {
        this.toastr.success('Create avis', 'Sucess');
      });
     }
     else{
      var avisDto: InputAvisDto = {
        idAvis: this.idAvis,        
        commentaire: this.avisGroup.get('commentaire')?.value,        
        idSociete: this.avisGroup.get('societes')?.value,        
        idMission: this.avisGroup.get('missions')?.value,        
        idTeleoperateur: this.avisGroup.get('teleoperateurs')?.value,        
        note: this.avisGroup.get('note')?.value
      }

      this.avisService.createAvis(avisDto).subscribe(res => {
        this.toastr.success('Create avis', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get commentaire() { return this.avisGroup.get('commentaire'); }  
  get societes() { return this.avisGroup.get('societes'); }  
  get missions() { return this.avisGroup.get('missions'); }  
  get teleoperateurs() { return this.avisGroup.get('teleoperateurs'); }  
  get note() { return this.avisGroup.get('note'); }
}