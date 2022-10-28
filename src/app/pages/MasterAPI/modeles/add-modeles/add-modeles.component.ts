import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddMissionsComponent } from 'src/app/pages/MasterAPI/missions/add-missions/add-missions.component';
import { MissionsDto, MissionsService } from 'src/app/shared/services/missions.service';
import { AddTeleoperateursComponent } from 'src/app/pages/MasterAPI/teleoperateurs/add-teleoperateurs/add-teleoperateurs.component';
import { TeleoperateursDto, TeleoperateursService } from 'src/app/shared/services/teleoperateurs.service';
import { ModelesService, InputModelesDto, ModelesDto } from 'src/app/shared/services/modeles.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-modeles',
  templateUrl: './add-modeles.component.html',
  styleUrls: ['./add-modeles.component.scss']
})

export class AddModelesComponent implements OnInit {
  public missionss: MissionsDto[] | undefined;
  public teleoperateurss: TeleoperateursDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idModele: any = 0;
  modelesDto: InputModelesDto | undefined;
  public modelesGroup = new FormGroup({
    titre : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private missionsService: MissionsService,
    private teleoperateursService: TeleoperateursService,
              private modelesService: ModelesService,
              public dialog: MatDialog, 
              private activatedroute: ActivatedRoute) { }

  openDialog() {
    const dialogRefMissions = this.dialog.open(AddMissionsComponent);

    dialogRefMissions.afterClosed().subscribe(result => {
      this.getAllMissions();
    });
    const dialogRefTeleoperateurs = this.dialog.open(AddTeleoperateursComponent);

    dialogRefTeleoperateurs.afterClosed().subscribe(result => {
      this.getAllTeleoperateurs();
    });
  }
  
  getAllMissions() {
    this.missionsService.getAllMissions()
      .subscribe((data: Array<MissionsDto>) => {
        this.missionss = [...data];
      });
  }
  getAllTeleoperateurs() {
    this.teleoperateursService.getAllTeleoperateurs()
      .subscribe((data: Array<TeleoperateursDto>) => {
        this.teleoperateurss = [...data];
      });
  }
  getModeles(idModele: number) {
    this.modelesService.getEditModeles(idModele).subscribe(res => {
      this.modelesDto = res;      
      this.teleoperateurs?.setValue(res.idTeleoperateur, { onlySelf: true });      
      this.missions?.setValue(res.idMission, { onlySelf: true });      
      this.titre?.setValue(res.titre);        
      this.description?.setValue(res.description);        
      this.type_Modele?.setValue(res.type_Modele);        
      this.dateCreation_Modele?.setValue(res.dateCreation_Modele);  
    });    
  }

  ngOnInit(): void {
    this.getAllMissions();
    this.getAllTeleoperateurs();
    this.activatedroute.paramMap.subscribe(params => {
      this.idModele = Number(params.get('idModele'));
      this.getModeles(this.idModele);
    });
  }

  onSubmit() {
    this.modelesGroup.markAllAsTouched();
    if (this.modelesGroup.valid) { 
     if(this.idModele>0){
      var modelesDto: InputModelesDto = {
        idModele: this.idModele,        
        idTeleoperateur: this.modelesGroup.get('teleoperateurs')?.value,        
        idMission: this.modelesGroup.get('missions')?.value,        
        titre: this.modelesGroup.get('titre')?.value,        
        description: this.modelesGroup.get('description')?.value,        
        type_Modele: this.modelesGroup.get('type_Modele')?.value,        
        dateCreation_Modele: this.modelesGroup.get('dateCreation_Modele')?.value
      }

      this.modelesService.updateModeles(modelesDto).subscribe(res => {
        this.toastr.success('Create modeles', 'Sucess');
      });
     }
     else{
      var modelesDto: InputModelesDto = {
        idModele: this.idModele,        
        idTeleoperateur: this.modelesGroup.get('teleoperateurs')?.value,        
        idMission: this.modelesGroup.get('missions')?.value,        
        titre: this.modelesGroup.get('titre')?.value,        
        description: this.modelesGroup.get('description')?.value,        
        type_Modele: this.modelesGroup.get('type_Modele')?.value,        
        dateCreation_Modele: this.modelesGroup.get('dateCreation_Modele')?.value
      }

      this.modelesService.createModeles(modelesDto).subscribe(res => {
        this.toastr.success('Create modeles', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get teleoperateurs() { return this.modelesGroup.get('teleoperateurs'); }  
  get missions() { return this.modelesGroup.get('missions'); }  
  get titre() { return this.modelesGroup.get('titre'); }  
  get description() { return this.modelesGroup.get('description'); }  
  get type_Modele() { return this.modelesGroup.get('type_Modele'); }  
  get dateCreation_Modele() { return this.modelesGroup.get('dateCreation_Modele'); }
}