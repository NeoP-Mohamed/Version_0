import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddTeleoperateursComponent } from 'src/app/pages/MasterAPI/teleoperateurs/add-teleoperateurs/add-teleoperateurs.component';
import { TeleoperateursDto, TeleoperateursService } from 'src/app/shared/services/teleoperateurs.service';
import { Moyens__PaiementService, InputMoyens__PaiementDto, Moyens__PaiementDto } from 'src/app/shared/services/moyens__paiement.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-moyens__paiement',
  templateUrl: './add-moyens__paiement.component.html',
  styleUrls: ['./add-moyens__paiement.component.scss']
})

export class AddMoyens__PaiementComponent implements OnInit {
  public teleoperateurss: TeleoperateursDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idMoyens_Paiement: any = 0;
  moyens__paiementDto: InputMoyens__PaiementDto | undefined;
  public moyens__paiementGroup = new FormGroup({
    teleoperateurs : new FormControl('', [Validators.required]),
    intitule : new FormControl('', [Validators.required]),
    numero_Carte : new FormControl('', [Validators.required]),
    date_Ajout : new FormControl('', [Validators.required]),
    date_Expiration : new FormControl('', [Validators.required]),
    cryptogramme : new FormControl('', [Validators.required]),
    etat : new FormControl('', [Validators.required]),
    carte_Favorite : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private teleoperateursService: TeleoperateursService,
              private moyens__paiementService: Moyens__PaiementService,
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
  getMoyens__Paiement(idMoyens_Paiement: number) {
    this.moyens__paiementService.getEditMoyens__Paiement(idMoyens_Paiement).subscribe(res => {
      this.moyens__paiementDto = res;      
      this.date_Expiration?.setValue(res.date_Expiration);        
      this.etat?.setValue(res.etat);        
      this.numero_Carte?.setValue(res.numero_Carte);        
      this.teleoperateurs?.setValue(res.idTeleoperateur, { onlySelf: true });      
      this.date_Ajout?.setValue(res.date_Ajout);        
      this.cryptogramme?.setValue(res.cryptogramme);        
      this.intitule?.setValue(res.intitule);  
    });    
  }

  ngOnInit(): void {
    this.getAllTeleoperateurs();
    this.activatedroute.paramMap.subscribe(params => {
      this.idMoyens_Paiement = Number(params.get('idMoyens_Paiement'));
      this.getMoyens__Paiement(this.idMoyens_Paiement);
    });
  }

  onSubmit() {
    this.moyens__paiementGroup.markAllAsTouched();
    if (this.moyens__paiementGroup.valid) { 
     if(this.idMoyens_Paiement>0){
      var moyens__paiementDto: InputMoyens__PaiementDto = {
        idMoyens_Paiement: this.idMoyens_Paiement,        
        date_Expiration: this.moyens__paiementGroup.get('date_Expiration')?.value,        
        etat: this.moyens__paiementGroup.get('etat')?.value,        
        numero_Carte: this.moyens__paiementGroup.get('numero_Carte')?.value,        
        idTeleoperateur: this.moyens__paiementGroup.get('teleoperateurs')?.value,        
        date_Ajout: this.moyens__paiementGroup.get('date_Ajout')?.value,        
        cryptogramme: this.moyens__paiementGroup.get('cryptogramme')?.value,        
        intitule: this.moyens__paiementGroup.get('intitule')?.value
      }

      this.moyens__paiementService.updateMoyens__Paiement(moyens__paiementDto).subscribe(res => {
        this.toastr.success('Create moyens__paiement', 'Sucess');
      });
     }
     else{
      var moyens__paiementDto: InputMoyens__PaiementDto = {
        idMoyens_Paiement: this.idMoyens_Paiement,        
        date_Expiration: this.moyens__paiementGroup.get('date_Expiration')?.value,        
        etat: this.moyens__paiementGroup.get('etat')?.value,        
        numero_Carte: this.moyens__paiementGroup.get('numero_Carte')?.value,        
        idTeleoperateur: this.moyens__paiementGroup.get('teleoperateurs')?.value,        
        date_Ajout: this.moyens__paiementGroup.get('date_Ajout')?.value,        
        cryptogramme: this.moyens__paiementGroup.get('cryptogramme')?.value,        
        intitule: this.moyens__paiementGroup.get('intitule')?.value
      }

      this.moyens__paiementService.createMoyens__Paiement(moyens__paiementDto).subscribe(res => {
        this.toastr.success('Create moyens__paiement', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get date_Expiration() { return this.moyens__paiementGroup.get('date_Expiration'); }  
  get etat() { return this.moyens__paiementGroup.get('etat'); }  
  get numero_Carte() { return this.moyens__paiementGroup.get('numero_Carte'); }  
  get teleoperateurs() { return this.moyens__paiementGroup.get('teleoperateurs'); }  
  get date_Ajout() { return this.moyens__paiementGroup.get('date_Ajout'); }  
  get cryptogramme() { return this.moyens__paiementGroup.get('cryptogramme'); }  
  get intitule() { return this.moyens__paiementGroup.get('intitule'); }
}