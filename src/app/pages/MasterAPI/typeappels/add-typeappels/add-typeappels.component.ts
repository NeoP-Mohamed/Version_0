import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddTeleoperateursComponent } from 'src/app/pages/MasterAPI/teleoperateurs/add-teleoperateurs/add-teleoperateurs.component';
import { TeleoperateursDto, TeleoperateursService } from 'src/app/shared/services/teleoperateurs.service';
import { TypeAppelsService, InputTypeAppelsDto, TypeAppelsDto } from 'src/app/shared/services/typeappels.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-typeappels',
  templateUrl: './add-typeappels.component.html',
  styleUrls: ['./add-typeappels.component.scss']
})

export class AddTypeAppelsComponent implements OnInit {
  public teleoperateurss: TeleoperateursDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idTypeAppel: any = 0;
  typeappelsDto: InputTypeAppelsDto | undefined;
  public typeappelsGroup = new FormGroup({
    teleoperateurs : new FormControl('', [Validators.required]),
    libelle_Type_Appel : new FormControl('', [Validators.required]),
    nbre_Annee : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private teleoperateursService: TeleoperateursService,
              private typeappelsService: TypeAppelsService,
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
  getTypeAppels(idTypeAppel: number) {
    this.typeappelsService.getEditTypeAppels(idTypeAppel).subscribe(res => {
      this.typeappelsDto = res;      
      this.nbre_Annee?.setValue(res.nbre_Annee);        
      this.libelle_Type_Appel?.setValue(res.libelle_Type_Appel);        
      this.teleoperateurs?.setValue(res.idTeleoperateur, { onlySelf: true });
    });    
  }

  ngOnInit(): void {
    this.getAllTeleoperateurs();
    this.activatedroute.paramMap.subscribe(params => {
      this.idTypeAppel = Number(params.get('idTypeAppel'));
      this.getTypeAppels(this.idTypeAppel);
    });
  }

  onSubmit() {
    this.typeappelsGroup.markAllAsTouched();
    if (this.typeappelsGroup.valid) { 
     if(this.idTypeAppel>0){
      var typeappelsDto: InputTypeAppelsDto = {
        idTypeAppel: this.idTypeAppel,        
        nbre_Annee: this.typeappelsGroup.get('nbre_Annee')?.value,        
        libelle_Type_Appel: this.typeappelsGroup.get('libelle_Type_Appel')?.value,        
        idTeleoperateur: this.typeappelsGroup.get('teleoperateurs')?.value
      }

      this.typeappelsService.updateTypeAppels(typeappelsDto).subscribe(res => {
        this.toastr.success('Create typeappels', 'Sucess');
      });
     }
     else{
      var typeappelsDto: InputTypeAppelsDto = {
        idTypeAppel: this.idTypeAppel,        
        nbre_Annee: this.typeappelsGroup.get('nbre_Annee')?.value,        
        libelle_Type_Appel: this.typeappelsGroup.get('libelle_Type_Appel')?.value,        
        idTeleoperateur: this.typeappelsGroup.get('teleoperateurs')?.value
      }

      this.typeappelsService.createTypeAppels(typeappelsDto).subscribe(res => {
        this.toastr.success('Create typeappels', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get nbre_Annee() { return this.typeappelsGroup.get('nbre_Annee'); }  
  get libelle_Type_Appel() { return this.typeappelsGroup.get('libelle_Type_Appel'); }  
  get teleoperateurs() { return this.typeappelsGroup.get('teleoperateurs'); }
}