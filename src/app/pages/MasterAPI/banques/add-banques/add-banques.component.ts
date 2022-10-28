import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddTeleoperateursComponent } from 'src/app/pages/MasterAPI/teleoperateurs/add-teleoperateurs/add-teleoperateurs.component';
import { TeleoperateursDto, TeleoperateursService } from 'src/app/shared/services/teleoperateurs.service';
import { BanquesService, InputBanquesDto, BanquesDto } from 'src/app/shared/services/banques.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-banques',
  templateUrl: './add-banques.component.html',
  styleUrls: ['./add-banques.component.scss']
})

export class AddBanquesComponent implements OnInit {
  public teleoperateurss: TeleoperateursDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idBanque: any = 0;
  banquesDto: InputBanquesDto | undefined;
  public banquesGroup = new FormGroup({
    teleoperateurs : new FormControl('', [Validators.required]),
    type : new FormControl('', [Validators.required]),
    iban : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private teleoperateursService: TeleoperateursService,
              private banquesService: BanquesService,
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
  getBanques(idBanque: number) {
    this.banquesService.getEditBanques(idBanque).subscribe(res => {
      this.banquesDto = res;      
      this.iban?.setValue(res.iban);        
      this.teleoperateurs?.setValue(res.idTeleoperateur, { onlySelf: true });      
      this.type?.setValue(res.type);  
    });    
  }

  ngOnInit(): void {
    this.getAllTeleoperateurs();
    this.activatedroute.paramMap.subscribe(params => {
      this.idBanque = Number(params.get('idBanque'));
      this.getBanques(this.idBanque);
    });
  }

  onSubmit() {
    this.banquesGroup.markAllAsTouched();
    if (this.banquesGroup.valid) { 
     if(this.idBanque>0){
      var banquesDto: InputBanquesDto = {
        idBanque: this.idBanque,        
        iban: this.banquesGroup.get('iban')?.value,        
        idTeleoperateur: this.banquesGroup.get('teleoperateurs')?.value,        
        type: this.banquesGroup.get('type')?.value
      }

      this.banquesService.updateBanques(banquesDto).subscribe(res => {
        this.toastr.success('Create banques', 'Sucess');
      });
     }
     else{
      var banquesDto: InputBanquesDto = {
        idBanque: this.idBanque,        
        iban: this.banquesGroup.get('iban')?.value,        
        idTeleoperateur: this.banquesGroup.get('teleoperateurs')?.value,        
        type: this.banquesGroup.get('type')?.value
      }

      this.banquesService.createBanques(banquesDto).subscribe(res => {
        this.toastr.success('Create banques', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get iban() { return this.banquesGroup.get('iban'); }  
  get teleoperateurs() { return this.banquesGroup.get('teleoperateurs'); }  
  get type() { return this.banquesGroup.get('type'); }
}