import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddTeleoperateursComponent } from 'src/app/pages/MasterAPI/teleoperateurs/add-teleoperateurs/add-teleoperateurs.component';
import { TeleoperateursDto, TeleoperateursService } from 'src/app/shared/services/teleoperateurs.service';
import { AbonnementsService, InputAbonnementsDto, AbonnementsDto } from 'src/app/shared/services/abonnements.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-abonnements',
  templateUrl: './add-abonnements.component.html',
  styleUrls: ['./add-abonnements.component.scss']
})

export class AddAbonnementsComponent implements OnInit {
  public teleoperateurss: TeleoperateursDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idAbonnement: any = 0;
  abonnementsDto: InputAbonnementsDto | undefined;
  public abonnementsGroup = new FormGroup({
    libelle_Abonnement : new FormControl('', [Validators.required]),
    prix : new FormControl('', [Validators.required]),
    periode_Engagement : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private teleoperateursService: TeleoperateursService,
              private abonnementsService: AbonnementsService,
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
  getAbonnements(idAbonnement: number) {
   
    this.abonnementsService.getEditAbonnements(idAbonnement).subscribe(res => {
      this.abonnementsDto = res;      
      this.commission?.setValue(res.commission);        
      this.prix?.setValue(res.prix);        
      this.teleoperateurs?.setValue(res.idTeleoperateur, { onlySelf: true });      
      this.periode_Engagement?.setValue(res.periode_Engagement);        
      this.libelle_Abonnement?.setValue(res.libelle_Abonnement);  
    });    
  }

  ngOnInit(): void {
    this.getAllTeleoperateurs();
    this.activatedroute.paramMap.subscribe(params => {
      this.idAbonnement = Number(params.get('idAbonnement'));
      this.getAbonnements(this.idAbonnement);
    });
  }

  onSubmit() {
    this.abonnementsGroup.markAllAsTouched();
    if (this.abonnementsGroup.valid) { 
     if(this.idAbonnement>0){
      var abonnementsDto: InputAbonnementsDto = {
        idAbonnement: this.idAbonnement,        
        commission: this.abonnementsGroup.get('commission')?.value,        
        prix: this.abonnementsGroup.get('prix')?.value,        
        idTeleoperateur: this.abonnementsGroup.get('teleoperateurs')?.value,        
        periode_Engagement: this.abonnementsGroup.get('periode_Engagement')?.value,        
        libelle_Abonnement: this.abonnementsGroup.get('libelle_Abonnement')?.value
      }

      this.abonnementsService.updateAbonnements(abonnementsDto).subscribe(res => {
        this.toastr.success('Create abonnements', 'Sucess');
      });
     }
     else{
      var abonnementsDto: InputAbonnementsDto = {
        idAbonnement: this.idAbonnement,        
        commission: this.abonnementsGroup.get('commission')?.value,        
        prix: this.abonnementsGroup.get('prix')?.value,        
        idTeleoperateur: this.abonnementsGroup.get('teleoperateurs')?.value,        
        periode_Engagement: this.abonnementsGroup.get('periode_Engagement')?.value,        
        libelle_Abonnement: this.abonnementsGroup.get('libelle_Abonnement')?.value
      }

      this.abonnementsService.createAbonnements(abonnementsDto).subscribe(res => {
        this.toastr.success('Create abonnements', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get commission() { return this.abonnementsGroup.get('commission'); }  
  get prix() { return this.abonnementsGroup.get('prix'); }  
  get teleoperateurs() { return this.abonnementsGroup.get('teleoperateurs'); }  
  get periode_Engagement() { return this.abonnementsGroup.get('periode_Engagement'); }  
  get libelle_Abonnement() { return this.abonnementsGroup.get('libelle_Abonnement'); }
}