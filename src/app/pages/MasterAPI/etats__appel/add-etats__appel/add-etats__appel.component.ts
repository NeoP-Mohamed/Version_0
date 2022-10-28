import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddTeleoperateursComponent } from 'src/app/pages/MasterAPI/teleoperateurs/add-teleoperateurs/add-teleoperateurs.component';
import { TeleoperateursDto, TeleoperateursService } from 'src/app/shared/services/teleoperateurs.service';
import { Etats__AppelService, InputEtats__AppelDto, Etats__AppelDto } from 'src/app/shared/services/etats__appel.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-etats__appel',
  templateUrl: './add-etats__appel.component.html',
  styleUrls: ['./add-etats__appel.component.scss']
})

export class AddEtats__AppelComponent implements OnInit {
  public teleoperateurss: TeleoperateursDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idEtatAppel: any = 0;
  etats__appelDto: InputEtats__AppelDto | undefined;
  public etats__appelGroup = new FormGroup({
    nom : new FormControl('', [Validators.required]),
    type_Etat : new FormControl('', [Validators.required]),
    pastille : new FormControl('', [Validators.required]),
    appel_Argumente : new FormControl('', [Validators.required]),
    type_Mission : new FormControl('', [Validators.required]),
    fichier_Cible : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private teleoperateursService: TeleoperateursService,
              private etats__appelService: Etats__AppelService,
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
  getEtats__Appel(idEtatAppel: number) {
    this.etats__appelService.getEditEtats__Appel(idEtatAppel).subscribe(res => {
      this.etats__appelDto = res;      
      this.fichier_Cible?.setValue(res.fichier_Cible);        
      this.nom?.setValue(res.nom);        
      this.type_Mission?.setValue(res.type_Mission);        
      this.teleoperateurs?.setValue(res.idTeleoperateur, { onlySelf: true });      
      this.type_Etat?.setValue(res.type_Etat);        
      this.pastille?.setValue(res.pastille);  
    });    
  }

  ngOnInit(): void {
    this.getAllTeleoperateurs();
    this.activatedroute.paramMap.subscribe(params => {
      this.idEtatAppel = Number(params.get('idEtatAppel'));
      this.getEtats__Appel(this.idEtatAppel);
    });
  }

  onSubmit() {
    this.etats__appelGroup.markAllAsTouched();
    if (this.etats__appelGroup.valid) { 
     if(this.idEtatAppel>0){
      var etats__appelDto: InputEtats__AppelDto = {
        idEtatAppel: this.idEtatAppel,        
        fichier_Cible: this.etats__appelGroup.get('fichier_Cible')?.value,        
        nom: this.etats__appelGroup.get('nom')?.value,        
        type_Mission: this.etats__appelGroup.get('type_Mission')?.value,        
        idTeleoperateur: this.etats__appelGroup.get('teleoperateurs')?.value,        
        type_Etat: this.etats__appelGroup.get('type_Etat')?.value,        
        pastille: this.etats__appelGroup.get('pastille')?.value
      }

      this.etats__appelService.updateEtats__Appel(etats__appelDto).subscribe(res => {
        this.toastr.success('Create etats__appel', 'Sucess');
      });
     }
     else{
      var etats__appelDto: InputEtats__AppelDto = {
        idEtatAppel: this.idEtatAppel,        
        fichier_Cible: this.etats__appelGroup.get('fichier_Cible')?.value,        
        nom: this.etats__appelGroup.get('nom')?.value,        
        type_Mission: this.etats__appelGroup.get('type_Mission')?.value,        
        idTeleoperateur: this.etats__appelGroup.get('teleoperateurs')?.value,        
        type_Etat: this.etats__appelGroup.get('type_Etat')?.value,        
        pastille: this.etats__appelGroup.get('pastille')?.value
      }

      this.etats__appelService.createEtats__Appel(etats__appelDto).subscribe(res => {
        this.toastr.success('Create etats__appel', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get fichier_Cible() { return this.etats__appelGroup.get('fichier_Cible'); }  
  get nom() { return this.etats__appelGroup.get('nom'); }  
  get type_Mission() { return this.etats__appelGroup.get('type_Mission'); }  
  get teleoperateurs() { return this.etats__appelGroup.get('teleoperateurs'); }  
  get type_Etat() { return this.etats__appelGroup.get('type_Etat'); }  
  get pastille() { return this.etats__appelGroup.get('pastille'); }
}