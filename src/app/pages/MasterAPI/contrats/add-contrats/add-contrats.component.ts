import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddTeleoperateursComponent } from 'src/app/pages/MasterAPI/teleoperateurs/add-teleoperateurs/add-teleoperateurs.component';
import { TeleoperateursDto, TeleoperateursService } from 'src/app/shared/services/teleoperateurs.service';
import { ContratsService, InputContratsDto, ContratsDto } from 'src/app/shared/services/contrats.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-contrats',
  templateUrl: './add-contrats.component.html',
  styleUrls: ['./add-contrats.component.scss']
})

export class AddContratsComponent implements OnInit {
  public teleoperateurss: TeleoperateursDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idContrat: any = 0;
  contratsDto: InputContratsDto | undefined;
  public contratsGroup = new FormGroup({
    numero : new FormControl('', [Validators.required]),
    date_Signature : new FormControl('', [Validators.required]),
    contrat : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private teleoperateursService: TeleoperateursService,
              private contratsService: ContratsService,
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
  getContrats(idContrat: number) {
    this.contratsService.getEditContrats(idContrat).subscribe(res => {
      this.contratsDto = res;      
      this.contrat?.setValue(res.contrat);        
      this.numero?.setValue(res.numero);        
      this.date_Signature?.setValue(res.date_Signature);        
      this.teleoperateurs?.setValue(res.idTeleoperateur, { onlySelf: true });
    });    
  }

  ngOnInit(): void {
    this.getAllTeleoperateurs();
    this.activatedroute.paramMap.subscribe(params => {
      this.idContrat = Number(params.get('idContrat'));
      this.getContrats(this.idContrat);
    });
  }

  onSubmit() {
    this.contratsGroup.markAllAsTouched();
    if (this.contratsGroup.valid) { 
     if(this.idContrat>0){
      var contratsDto: InputContratsDto = {
        idContrat: this.idContrat,        
        contrat: this.contratsGroup.get('contrat')?.value,        
        numero: this.contratsGroup.get('numero')?.value,        
        date_Signature: this.contratsGroup.get('date_Signature')?.value,        
        idTeleoperateur: this.contratsGroup.get('teleoperateurs')?.value
      }

      this.contratsService.updateContrats(contratsDto).subscribe(res => {
        this.toastr.success('Create contrats', 'Sucess');
      });
     }
     else{
      var contratsDto: InputContratsDto = {
        idContrat: this.idContrat,        
        contrat: this.contratsGroup.get('contrat')?.value,        
        numero: this.contratsGroup.get('numero')?.value,        
        date_Signature: this.contratsGroup.get('date_Signature')?.value,        
        idTeleoperateur: this.contratsGroup.get('teleoperateurs')?.value
      }

      this.contratsService.createContrats(contratsDto).subscribe(res => {
        this.toastr.success('Create contrats', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get contrat() { return this.contratsGroup.get('contrat'); }  
  get numero() { return this.contratsGroup.get('numero'); }  
  get date_Signature() { return this.contratsGroup.get('date_Signature'); }  
  get teleoperateurs() { return this.contratsGroup.get('teleoperateurs'); }
}