import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddTeleoperateursComponent } from 'src/app/pages/MasterAPI/teleoperateurs/add-teleoperateurs/add-teleoperateurs.component';
import { TeleoperateursDto, TeleoperateursService } from 'src/app/shared/services/teleoperateurs.service';
import { TypeMissionsService, InputTypeMissionsDto, TypeMissionsDto } from 'src/app/shared/services/typemissions.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-typemissions',
  templateUrl: './add-typemissions.component.html',
  styleUrls: ['./add-typemissions.component.scss']
})

export class AddTypeMissionsComponent implements OnInit {
  public teleoperateurss: TeleoperateursDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idTypeMission: any = 0;
  typemissionsDto: InputTypeMissionsDto | undefined;
  public typemissionsGroup = new FormGroup({
    teleoperateurs : new FormControl('', [Validators.required]),
    libelle_Type_Mission : new FormControl('', [Validators.required]),
    libelle_Type_Prospect : new FormControl('', [Validators.required]),
    type_Mission_Souhaitee : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private teleoperateursService: TeleoperateursService,
              private typemissionsService: TypeMissionsService,
              public dialog: MatDialog, 
              private activatedroute: ActivatedRoute) { }

  openDialog() {
    const dialogRefTeleoperateurs = this.dialog.open(AddTeleoperateursComponent);

    dialogRefTeleoperateurs.afterClosed().subscribe(result => {
      this.getAllTeleoperateurs();
    });
  }
  
  getAllTeleoperateurs() {
    this.teleoperateursService.getAllTeleoperateurs()
      .subscribe((data: Array<TeleoperateursDto>) => {
        this.teleoperateurss = [...data];
      });
  }
  getTypeMissions(idTypeMission: number) {
    this.typemissionsService.getEditTypeMissions(idTypeMission).subscribe(res => {
      this.typemissionsDto = res;      
      this.type_Mission_Souhaitee?.setValue(res.type_Mission_Souhaitee);        
      this.libelle_Type_Prospect?.setValue(res.libelle_Type_Prospect);        
      this.libelle_Type_Mission?.setValue(res.libelle_Type_Mission);        
      this.teleoperateurs?.setValue(res.idTeleoperateur, { onlySelf: true });
    });    
  }

  ngOnInit(): void {
    this.getAllTeleoperateurs();
    this.activatedroute.paramMap.subscribe(params => {
      this.idTypeMission = Number(params.get('idTypeMission'));
      this.getTypeMissions(this.idTypeMission);
    });
  }

  onSubmit() {
    this.typemissionsGroup.markAllAsTouched();
    if (this.typemissionsGroup.valid) { 
     if(this.idTypeMission>0){
      var typemissionsDto: InputTypeMissionsDto = {
        idTypeMission: this.idTypeMission,        
        type_Mission_Souhaitee: this.typemissionsGroup.get('type_Mission_Souhaitee')?.value,        
        libelle_Type_Prospect: this.typemissionsGroup.get('libelle_Type_Prospect')?.value,        
        libelle_Type_Mission: this.typemissionsGroup.get('libelle_Type_Mission')?.value,        
        idTeleoperateur: this.typemissionsGroup.get('teleoperateurs')?.value
      }

      this.typemissionsService.updateTypeMissions(typemissionsDto).subscribe(res => {
        this.toastr.success('Create typemissions', 'Sucess');
      });
     }
     else{
      var typemissionsDto: InputTypeMissionsDto = {
        idTypeMission: this.idTypeMission,        
        type_Mission_Souhaitee: this.typemissionsGroup.get('type_Mission_Souhaitee')?.value,        
        libelle_Type_Prospect: this.typemissionsGroup.get('libelle_Type_Prospect')?.value,        
        libelle_Type_Mission: this.typemissionsGroup.get('libelle_Type_Mission')?.value,        
        idTeleoperateur: this.typemissionsGroup.get('teleoperateurs')?.value
      }

      this.typemissionsService.createTypeMissions(typemissionsDto).subscribe(res => {
        this.toastr.success('Create typemissions', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get type_Mission_Souhaitee() { return this.typemissionsGroup.get('type_Mission_Souhaitee'); }  
  get libelle_Type_Prospect() { return this.typemissionsGroup.get('libelle_Type_Prospect'); }  
  get libelle_Type_Mission() { return this.typemissionsGroup.get('libelle_Type_Mission'); }  
  get teleoperateurs() { return this.typemissionsGroup.get('teleoperateurs'); }
}