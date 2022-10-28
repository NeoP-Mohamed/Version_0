import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddTeleoperateursComponent } from 'src/app/pages/MasterAPI/teleoperateurs/add-teleoperateurs/add-teleoperateurs.component';
import { TeleoperateursDto, TeleoperateursService } from 'src/app/shared/services/teleoperateurs.service';
import { Etats__ValidationService, InputEtats__ValidationDto, Etats__ValidationDto } from 'src/app/shared/services/etats__validation.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-etats__validation',
  templateUrl: './add-etats__validation.component.html',
  styleUrls: ['./add-etats__validation.component.scss']
})

export class AddEtats__ValidationComponent implements OnInit {
  public teleoperateurss: TeleoperateursDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idEtatValidation: any = 0;
  isVisibleParametres: boolean = false;
  etats__validationDto: InputEtats__ValidationDto | undefined;
  public etats__validationGroup = new FormGroup({
    nom : new FormControl('', [Validators.required]),
    pastille : new FormControl('', [Validators.required]),
    avec_Parametres : new FormControl('', [Validators.required]),
    envoie_Mail : new FormControl('', [Validators.required]),
    action : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private teleoperateursService: TeleoperateursService,
              private etats__validationService: Etats__ValidationService,
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
  getEtats__Validation(idEtatValidation: number) {
    this.etats__validationService.getEditEtats__Validation(idEtatValidation).subscribe(res => {
      this.etats__validationDto = res;      
      this.action?.setValue(res.action);        
      this.pastille?.setValue(res.pastille);        
      this.teleoperateurs?.setValue(res.idTeleoperateur, { onlySelf: true });      
      this.nom?.setValue(res.nom);  
    });    
  }

  ngOnInit(): void {
    this.getAllTeleoperateurs();
    this.activatedroute.paramMap.subscribe(params => {
      this.idEtatValidation = Number(params.get('idEtatValidation'));
      this.getEtats__Validation(this.idEtatValidation);
    });
  }

  onSubmit() {
    this.etats__validationGroup.markAllAsTouched();
    if (this.etats__validationGroup.valid) { 
     if(this.idEtatValidation>0){
      var etats__validationDto: InputEtats__ValidationDto = {
        idEtatValidation: this.idEtatValidation,        
        action: this.etats__validationGroup.get('action')?.value,        
        pastille: this.etats__validationGroup.get('pastille')?.value,        
        idTeleoperateur: this.etats__validationGroup.get('teleoperateurs')?.value,        
        nom: this.etats__validationGroup.get('nom')?.value
      }

      this.etats__validationService.updateEtats__Validation(etats__validationDto).subscribe(res => {
        this.toastr.success('Create etats__validation', 'Sucess');
      });
     }
     else{
      var etats__validationDto: InputEtats__ValidationDto = {
        idEtatValidation: this.idEtatValidation,        
        action: this.etats__validationGroup.get('action')?.value,        
        pastille: this.etats__validationGroup.get('pastille')?.value,        
        idTeleoperateur: this.etats__validationGroup.get('teleoperateurs')?.value,        
        nom: this.etats__validationGroup.get('nom')?.value
      }

      this.etats__validationService.createEtats__Validation(etats__validationDto).subscribe(res => {
        this.toastr.success('Create etats__validation', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get action() { return this.etats__validationGroup.get('action'); }  
  get pastille() { return this.etats__validationGroup.get('pastille'); }  
  get teleoperateurs() { return this.etats__validationGroup.get('teleoperateurs'); }  
  get nom() { return this.etats__validationGroup.get('nom'); }
}